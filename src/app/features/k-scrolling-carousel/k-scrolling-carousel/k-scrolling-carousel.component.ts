import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'k-scrolling-carousel',
  templateUrl: './k-scrolling-carousel.component.html',
  styleUrls: ['./k-scrolling-carousel.component.scss']
})
export class KScrollingCarouselComponent implements OnInit {
  over:boolean =true;
  @Input()
  images:any[] =[]
  constructor() { }

  ngOnInit(): void {
  }

}
