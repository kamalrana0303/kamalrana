import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Output() 
  event:EventEmitter<any>= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.event.emit('product-summary-design');
  }

}
