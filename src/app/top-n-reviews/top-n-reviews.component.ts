import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../features/auth/graphql.service';

@Component({
  selector: 'app-top-n-reviews',
  templateUrl: './top-n-reviews.component.html',
  styleUrls: ['./top-n-reviews.component.scss']
})
export class TopNReviewsComponent implements OnInit {
  topReviews$ = this.gqlService.getTopNRating(10);
  constructor(private gqlService:GraphqlService) { }

  ngOnInit(): void {
    
  }



}
