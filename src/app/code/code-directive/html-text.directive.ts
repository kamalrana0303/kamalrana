import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[htmlText]'
})
export class HtmlTextDirective {
  @Input()
  htmlText?:ElementRef;
  constructor(private elementRef:ElementRef) {
   
    
  }
  ngAfterViewInit(){
  
    this.elementRef.nativeElement.innerHTML=  this.htmlText?.nativeElement.innerHTML
    .replace(/\s/g, '&nbsp;')
    .replace(/\n/g, '<br>')
    .replace(/</g, `&lt;`).replace(/>/g,'&gt;<br>')
    .replace(/class=([^<>]*)/g,`<span class='token attr-name'>class</span><span class='token attr-value'>=$1</span>`)
    .replace(/style=([^<>]*)/g,`<span class='token attr-name'>style</span><span class='token attr-value'>=$1</span>`)
    .replace(/src=([^<>]*)/g,`<span class='token attr-name'>src</span><span class='token attr-value'>=$1</span>`)
    .replace(/id=([^<>]*)/g, `<span class='token attr-name'>id</span><span class='token attr-value'>=$1</span>`)
    .replace(/&lt;div([^<>]*)/g, `<span class='token tag'>&lt;div$1</span>`)
    .replace(/&lt;img([^<>]*)/g, `<span class='token tag'>&lt;img$1</span>`)
    .replace(/&lt;ul([^<>]*)/g, `<span class='token tag'>&lt;ul$1</span>`)
    .replace(/&lt;li([^<>]*)/g, `<span class='token tag'>&lt;li$1</span>`)
    .replace(/&lt;button([^<>]*)/g, `<span class='token tag'>&lt;button$1</span>`)
    .replace(/&lt;span([^<>]*)/g, `<span class='token tag'>&lt;span$1</span>`)
    .replace(/&lt;h1([^<>]*)/g, `<span class='token tag'>&lt;h1$1</span>`)
    .replace(/&lt;\/div([^<>]*)/g, `<span class='token tag'>&lt;/div$1</span>`)
    .replace(/&lt;\/ul([^<>]*)/g, `<span class='token tag'>&lt;/ul$1</span>`)
    .replace(/&lt;\/li([^<>]*)/g, `<span class='token tag'>&lt;/li$1</span>`)
    .replace(/&lt;\/h1([^<>]*)/g, `<span class='token tag'>&lt;/h1$1</span>`)
    .replace(/&lt;\/span([^<>]*)/g, `<span class='token tag'>&lt;/span$1</span>`)
    .replace(/&lt;\/button([^<>]*)/g, `<span class='token tag'>&lt;/button$1</span>`)

    .replace(/&gt;/g,`<span class='token tag'>&gt;</span>`)
    .replace(/&lt;/g,`<span class='token tag'>&lt;</span>`)
    //.replace(/>([^<>]*)</g,`><span class='code-highlight'>$1</span><`)
    .replace(/&lt;li([^<>]*)&gt;/g, `<span class='token tag'>&lt;li$1&gt;</span>`)
    .replace(/_ngcontent([^<>]*)-c61=""/g,'')
   
    //.replace('/class/g',`cls`);
  }
}
