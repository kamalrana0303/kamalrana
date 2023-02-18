import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  
} from '@angular/animations';
@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations:[
    trigger('openClose',[
      state('open', style({
        display: 'block',
        opacity: 1,
      })),
      state('closed', style({
        display: 'none',
        opacity: 0,
      
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('expandCollapse',[
      state('expand', style({
        width: '258px'
      })),
      state('collapse', style({
        width: '124px'
      }))
    ])
  ]
})
export class ImageComponent implements OnInit {
  @Input()
  img:any;
  over:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
