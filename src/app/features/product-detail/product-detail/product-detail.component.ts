import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  content:any[]=[
    {
      value:'',
      stream: ['U','t','i','l','i','t','y',' ','j','a','c','k','e','t']
    }
  ]
  @Output() 
  event:EventEmitter<any>= new EventEmitter<any>();
  jacket: string = '';
  constructor() { }

  ngOnInit(): void {
    this.loop(0,0);
  }

  click(){
    this.event.emit('product-summary-design');
  }

  loop(i:number, j:number){
   setTimeout(()=>{
    if(this.content.length > i){
      this.content[i].value += this.content[i].stream[j]
      if(this.content[i].stream.length == j){
        i++;
        this.loop(i, 0);
      }
      else{
        j++;
        this.loop(i,j);
      }
    }
   }, 1000);
  }

}
