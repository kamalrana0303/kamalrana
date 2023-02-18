import { Pipe, PipeTransform } from '@angular/core';
import { User_Review } from './like/like.component';
export interface AvgRating{
  rating1:number;
  rating2:number;
  rating3:number;
  rating4:number;
  rating5:number;
  total:number;
}
@Pipe({
  name: 'avgRating'
})
export class AvgRatingPipe implements PipeTransform {

  transform(user_review:User_Review[]|any, ...args: unknown[]): AvgRating {
    let avg:AvgRating = {
      rating1: 0,
      rating2: 0,
      rating3:0,
      rating4:0,
      rating5:0,
      total: 0
    }
    user_review?.forEach((review: User_Review,index: number)=>{
      avg.total = avg.total + review.rating;
      switch(review.rating){
        case 1: 
          avg.rating1 = (avg.rating1 + review.rating);
          break;
        case 2:
          avg.rating2 = (avg.rating2+ review.rating)
          break;
        case 3:
          avg.rating3 = (avg.rating3 + review.rating);
          break;
        case 4:
          avg.rating4 = (avg.rating4 + review.rating);
          break;
        case 5:
          avg.rating5 = (avg.rating5+ review.rating);
          break;
      }
     
    })
    
    avg.rating1 = avg.rating1 /( 5 * user_review?.length);
    avg.rating2 = avg.rating2 /( 5 * user_review?.length);
    avg.rating3 = avg.rating3 / (5 * user_review?.length);
    avg.rating4 = avg.rating4 / (5 * user_review?.length);
    avg.rating5 = avg.rating5 / (5 * user_review?.length);
    return avg;
  }

}
