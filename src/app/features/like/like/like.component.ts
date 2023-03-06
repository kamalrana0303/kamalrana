import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, map, Observable } from 'rxjs';
import gql from 'graphql-tag';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { GraphqlService } from '../../auth/graphql.service';
export interface User_Review{
    uuid:string
    comment:string
    rating: number
    timestamp:string,
    user: User
}
export interface User{
  email:string;
  uuid:string;
}
export interface Response{
  user_review: User_Review[]
}
const GET_LIKE= gql`
query MyQuery {
  user_review {
    uuid
    comment
    rating
    user {
      email
      uuid
    }
  }
}
`;
const ADD_LIKE= gql`
mutation ADD_REVIEW($comment:String, $rating:Int, $userId:String) {
  insert_user_review(objects: {comment: $comment, rating: $rating, userId: $userId}) {
    returning {
      comment
      rating
      userId
      uuid
    }
  }
}
`
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  reviews$?:Observable<Response>
  isDisabled:boolean =false;
  
  fg:FormGroup = this.fb.group({
    rating: [,[Validators.required]],
    comment: [,[Validators.required]],
  })
  constructor(private apollo:Apollo, private fb:FormBuilder, private auth:Auth, private gql:GraphqlService) { 

  }

  ngOnInit(): void {
    this.reviews$ = this.apollo.watchQuery<Response>({
      query: GET_LIKE,
    }).valueChanges.pipe(map(result=> {
      return result?.data
    }))
  }
  message:any
  success:any;
  addReview(){
    
    if(this.fg.valid){
      this.isDisabled = true;
      this.gql.addReview({...this.fg.value, userId:this.auth.currentUser?.uid}).subscribe({
        next: res=>{
          this.isDisabled =false;
          console.log(res)
          this.fg.reset();
          this.message = res;

        },
        error: err=>{
          this.isDisabled =false;
          this.message = err;
        }
      })
    }
    
    // this.apollo.mutate({
    //   mutation: ADD_LIKE,
    //   variables: {...this.fg.value, userId:this.auth.currentUser?.uid}
    // }).subscribe(x=> {
    //   console.log(x)
    // })
  }


 
}
