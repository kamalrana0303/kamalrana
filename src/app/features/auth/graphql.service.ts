import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Apollo, gql } from 'apollo-angular';
import { map, switchMap } from 'rxjs';
import { User_Review } from '../like/like/like.component';
export interface User {
  userId: string;
  email: string;
  uuid: string;
}
export interface GQLUserResponse {
  users: User[];
}
export interface GQLUserReviewResponse{
  user_review: User_Review[]
}
const GET_USER = gql`
  query GET_USER($userId: String) {
    users(where: { userId: { _eq: $userId } }) {
      email
      userId
      uuid
    }
  }
`;
const ADD_USER = gql`
  mutation User($email: String, $userId: String, $uuid: String) {
    insert_users(objects: { email: $email, userId: $userId }) {
      returning {
        email
        userId
      }
    }
  }
`;

const ADD_REVIEW = gql`mutation ADD_REVIEW($comment: String, $rating: Int, $uuid: uuid) {
  insert_user_review(objects: {comment: $comment, rating: $rating, userId: $uuid}) {
    returning {
      comment
      rating
      userId
      uuid
    }
  }
}`;

const GET_TOP_N_RATING = gql`query GET_TOP_10_RATING($n: Int) {
  user_review(limit: $n, order_by: {rating: desc_nulls_first, timestamp: desc_nulls_first}) {
    comment
    rating
    user {
      email
    }
    timestamp
  }
}`

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo, private auth: Auth) {}

  getUser(userId: String) {
    return this.apollo.watchQuery<GQLUserResponse>({
      query: GET_USER,
      variables: { userId: userId },
    }).valueChanges.pipe(map(res=> {
    
      return res.data
    }))
  }
  
  addUser(email?: string | null, userId?: string | null) {
    
    return this.apollo.mutate({
      mutation: ADD_USER,
      variables: {
        email: email,
        userId: userId,
      },
    });
  }

  addReview({ rating, comment,userId }: Rating) {
    return this.getUser(userId).pipe(
      switchMap((res) => {
        return this.apollo.mutate({
          mutation: ADD_REVIEW,
          variables: { rating: rating, comment: comment, uuid: res.users[0].uuid },
        });
      })
    );
  }

  getTopNRating(n:number){
    return this.apollo.watchQuery<GQLUserReviewResponse>({
      query: GET_TOP_N_RATING,
      variables:{
        "n": n
      }
    }).valueChanges.pipe(map(res=> res.data));
  }
}
export interface Rating {
  rating: number;
  comment: string;
  userId: string;
}
