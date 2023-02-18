import { Injectable } from '@angular/core';
import {getDatabase, ref,set,child,get} from '@angular/fire/database'
import { from } from 'rxjs';
import { SignupCredentials } from './auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class FiredbService {

  constructor() { }

  public writeUser({email,password, displayName}:SignupCredentials){
    const db = getDatabase()
    set(ref(db, 'users'), {
      email: email,
      password: password, 
      displayName:displayName
    })
  }

  public getUser(userId:string){
    const dbRef = ref(getDatabase());
    return from(get(child(dbRef, `users/${userId}`)))
  }
}
