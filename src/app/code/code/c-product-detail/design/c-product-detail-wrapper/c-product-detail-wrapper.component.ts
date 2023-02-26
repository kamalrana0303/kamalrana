import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'c-product-detail-wrapper',
  templateUrl: './c-product-detail-wrapper.component.html',
  styleUrls: ['./c-product-detail-wrapper.component.scss'],
})
export class CProductDetailWrapperComponent implements OnInit {
  fileName?: string = 'product-detail-summary.html';
  rows:number[]= Array.from({length: 55},(v,k)=> k+1);
  @ViewChild('pd',{static:true,read:ElementRef}) 
  productDetail?:ElementRef
  constructor() {
    
  }
 

  ngOnInit(): void {}
}
