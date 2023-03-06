import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
declare var ResizeObserver:any;
@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  width = new BehaviorSubject<number>(0);
  width$ = this.width.asObservable();
  observer:any;
  @ViewChild("host", {static:true, read:ElementRef})
  host?: ElementRef
  @ViewChild("container1", {static:true, read:ElementRef})
  container1?: ElementRef
  @ViewChild("flex1", {static:true, read:ElementRef})
  flex1?:ElementRef;
  @ViewChild("flex2", {static:true, read:ElementRef})
  flex2?:ElementRef;
  @ViewChild("flex3", {static:true, read:ElementRef})
  flex3?:ElementRef;

  quotes:string[]= "\"I am Java Full stack Web developer. I have been using Angular and Java for more than 2 years. I have developed E-com and CRM platform.\"".split(" ");
   
  constructor( private ngZone:NgZone, private renderer:Renderer2) {}

  ngOnInit(): void {
   
  }
  ngAfterViewInit() {
    this.observer= new ResizeObserver((entries:any)=> {
      this.ngZone.run(()=>{
        let outterWidth = entries[0].contentRect.width;
        if(outterWidth<  700){
          if(this.container1){
           
            this.container1.nativeElement.style.width = (outterWidth - 20 )+ 'px';
          }
          this.renderer.removeClass(this.flex1?.nativeElement, "flex");
          this.renderer.addClass(this.flex1?.nativeElement, 'text-center')
          this.renderer.removeClass(this.flex2?.nativeElement, 'flex-none')
          this.renderer.removeClass(this.flex2?.nativeElement, "-m-8")
          this.renderer.removeClass(this.flex2?.nativeElement, "mr-8")
          this.renderer.removeClass(this.flex2?.nativeElement, "w-48")
          this.renderer.removeClass(this.flex2?.nativeElement, "h-auto")
          this.renderer.addClass(this.flex2?.nativeElement, 'w-24')
          this.renderer.addClass(this.flex2?.nativeElement, 'h-24')
          this.renderer.addClass(this.flex2?.nativeElement, 'mx-auto')
          this.renderer.addClass(this.flex3?.nativeElement, 'rounded-full')
          
        }
        else{
          this.renderer.addClass(this.flex1?.nativeElement, "flex");
          this.renderer.addClass(this.flex2?.nativeElement, 'flex-none');
          this.renderer.addClass(this.flex2?.nativeElement, "-m-8")
          this.renderer.addClass(this.flex2?.nativeElement, "mr-8")
          this.renderer.addClass(this.flex2?.nativeElement, "w-48")
          this.renderer.addClass(this.flex2?.nativeElement, "h-auto")
          this.renderer.removeClass(this.flex2?.nativeElement, 'w-24')
          this.renderer.removeClass(this.flex2?.nativeElement, 'h-24')
          this.renderer.removeClass(this.flex2?.nativeElement, 'mx-auto')
          this.renderer.removeClass(this.flex3?.nativeElement, 'rounded-full')
          if(this.container1){
           
            this.container1.nativeElement.style.width = '';
          }
        }
        
        
        
      })
    })
    this.observer.observe(this.host?.nativeElement);
   
  }

  ngOnDestroy(){
    this.observer.unobserve(this.host?.nativeElement);
  }

  
}
