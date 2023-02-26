import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlTextDirective } from './html-text.directive';



@NgModule({
  declarations: [HtmlTextDirective],
  imports: [
    CommonModule
  ],
  exports:[HtmlTextDirective]
})
export class CodeDirectiveModule { }
