import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikeComponent } from '../like/like/like.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: '', component: ReviewComponent, pathMatch: 'full'
  },
  {
    path: 'all', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
