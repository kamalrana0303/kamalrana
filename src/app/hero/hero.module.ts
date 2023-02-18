import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero/hero.component';
import { MoviesComponent } from './movies/movies.component';

import { LikeModule } from '../features/like/like.module';
import { KScrollingCarouselModule } from '../features/k-scrolling-carousel/k-scrolling-carousel.module';
import { KKamalComponent } from './k-kamal/k-kamal.component';
import { OverviewComponent } from './overview/overview.component';
import { BlogComponent } from './hero/blog/blog.component';


@NgModule({
  declarations: [HeroComponent,MoviesComponent,KKamalComponent, OverviewComponent, BlogComponent],
  imports: [
    CommonModule,
    LikeModule,
    HeroRoutingModule,
    KScrollingCarouselModule
  ]
})
export class HeroModule { }
