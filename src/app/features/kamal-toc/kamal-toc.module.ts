import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KamalTocComponent } from './kamal-toc/kamal-toc.component';




@NgModule({
  declarations: [
    KamalTocComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[KamalTocComponent]
})
export class KamalTocModule { }
