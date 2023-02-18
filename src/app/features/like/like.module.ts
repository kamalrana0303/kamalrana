import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './like/like.component';
import { LikeService } from './like.service';
import { AvgRatingPipe } from './avg-rating.pipe';
import { ListDirective } from './list.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [LikeComponent, AvgRatingPipe, ListDirective, RatingComponent],
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  exports: [LikeComponent, AvgRatingPipe, RatingComponent],
  providers: [LikeService],
})
export class LikeModule {}
