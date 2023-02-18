import {
  ContentChildren,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  QueryList,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[list]',
})
export class ListDirective {
  @Input()
  list: number = -1;
  @ContentChildren('options') options?: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    this.options?.toArray().forEach((el) => {
      this.renderer.addClass(el.nativeElement, 'star-inactive');
    });
  }

  // @HostListener('click',['$event.target'])
  // onClick(target:any) {
  //   if(target.id.includes("option")){
  //     this.actionElement('star','star-inactive', 'onClick',target)
  //   }
  // }

  @HostListener('mouseover', ['$event.target'])
  onMouseover(target: any) {
    if (target.id.includes('option')) {
      for (let i = 0; i < target.id.split('_')[0]; i++) {
        this.renderer.addClass(this.options?.get(i)?.nativeElement, 'star');
        this.renderer.removeClass(
          this.options?.get(i)?.nativeElement,
          'star-inactive'
        );
      }
    }
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target: any) {
   
    for (let i = this.list + 1; i < 5; i++) {
      this.renderer.addClass(
        this.options?.get(i)?.nativeElement,
        'star-inactive'
      );
      this.renderer.removeClass(this.options?.get(i)?.nativeElement, 'star');
    }
  }

  @HostListener('click', ['$event.target'])
  onClick(target: any) {
    if (target.id.includes('option')) {
      this.actionElement('star', 'star-inactive', target);
    }
  }

  actionElement(fill: string, unfill: string, target: any) {
    let boundaryReached = false;

    this.options?.forEach((item) => {
      if (boundaryReached) {
        this.renderer.addClass(item.nativeElement, unfill);
        this.renderer.removeClass(item.nativeElement, fill);
      } else {
        this.renderer.addClass(item.nativeElement, fill);
        this.renderer.removeClass(item.nativeElement, unfill);
      }
      if (item.nativeElement.id === target.id) {
        boundaryReached = true;
      }
    });
  }
}
