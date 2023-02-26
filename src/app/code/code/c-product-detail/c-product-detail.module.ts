import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CProductDetailRoutingModule } from './c-product-detail-routing.module';
import { CProductDetailComponent } from './design/c-product-detail/c-product-detail.component';
import { CProductDetailWrapperComponent } from './design/c-product-detail-wrapper/c-product-detail-wrapper.component';
import { ProductDetailModule } from 'src/app/features/product-detail/product-detail.module';
import { CodeDirectiveModule } from '../../code-directive/code-directive.module';

@NgModule({
  declarations: [CProductDetailComponent,CProductDetailWrapperComponent],
  imports: [CommonModule, CProductDetailRoutingModule, ProductDetailModule, CodeDirectiveModule],
})
export class CProductDetailModule {}
