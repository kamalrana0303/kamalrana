import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { switchMap, take } from 'rxjs';
import { AuthService } from '../auth.service';
import { GraphqlService } from '../graphql.service';
const ADD_USER= gql`mutation User($email: String, $userId: String, $uuid: String) {
  insert_users(objects: {email: $email, userId: $userId}) {
    returning {
      email
      userId
    }
  }
}`
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  fg:FormGroup = this.fb.group({
    displayName: ['',[Validators.minLength(3)]],
    email: ['', [Validators.email]],
    password:['',[Validators.minLength(6)]]
  })
  msg?: string;
  constructor(private fb:FormBuilder,
    private apollo:Apollo, 
    private auth:AuthService, 
    private gql:GraphqlService,
    private router:Router) { }
  
  ngOnInit(): void {
  }

  signUp(){
    this.auth.signUp(this.fg.value)
    // .pipe(
    //   switchMap((user)=>{
    //     return this.auth.user$;
    //   }),
    //   take(1),
    //   switchMap((user)=> {
    //     return this.gql.addUser(user?.email, user?.uid)
    //   })
    // )
    .subscribe({
      next:()=>{
        this.router.navigate(['/'])
      },
      error:(error:any)=> {
       this.msg = error.message;
       console.log(error)
      }
    })
  }

}
