import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, updateProfile, user } from '@angular/fire/auth';
import { get, ref, set } from '@angular/fire/database';

import { createUserWithEmailAndPassword, User } from '@firebase/auth';
import { getDatabase } from '@firebase/database';
import { BehaviorSubject, first, forkJoin, from, mapTo, Observable, switchMap, take } from 'rxjs';
import { SignInCredentials, SignupCredentials } from './auth.model';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Apollo, gql } from 'apollo-angular';
import { GraphqlService } from './graphql.service';

@Injectable()
export class AuthService {
  readonly isLoggedIn$=authState(this.auth)
  readonly user$:Observable<User|null> = user(this.auth);
   
  constructor(private auth:Auth,private gql:GraphqlService, private http:HttpClient,private apollo:Apollo, private db:AngularFireDatabase) {

   }
  signIn({email,password}:SignInCredentials){
   
    return from(signInWithEmailAndPassword(this.auth,email,password))
  }
   signUp({email, password, displayName}:SignupCredentials){
    return from( createUserWithEmailAndPassword(this.auth, email,password)).pipe(
      switchMap(({user})=> {
        return forkJoin([
          updateProfile(user,{displayName}),
          this.db.object(`metadata/${user.uid}/refreshTime`).valueChanges()
          .pipe(first(refreshTime=>!!refreshTime),mapTo(user))
          //this.http.post('https://us-central1-kamalrana.cloudfunctions.net/streamUsers',{user:{...user,displayName}})
        ])
      }),
      take(1),
      switchMap((user)=> { 
        return from(user[1].getIdToken(true)).pipe(mapTo(user));
      }),
      take(1),
      switchMap((user)=> {
        return this.gql.addUser(user[1].email, user[1].uid)
      })
    )
  }
  signOut(){
    return from(this.auth.signOut())
  }
}
