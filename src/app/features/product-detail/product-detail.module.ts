import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CodeModule } from 'src/app/code/code.module';



@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    CodeModule
  ],
  exports:[ProductDetailComponent]
})
export class ProductDetailModule { }
