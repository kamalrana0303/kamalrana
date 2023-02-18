import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KScrollingCarouselComponent } from './k-scrolling-carousel/k-scrolling-carousel.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    KScrollingCarouselComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    KScrollingCarouselComponent
  ]
})
export class KScrollingCarouselModule { }
