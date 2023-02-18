import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewComponent } from './review/review.component';
import { LikeModule } from '../like/like.module';


@NgModule({
  declarations: [
    ReviewComponent
  ],
  imports: [
    CommonModule,
    LikeModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
