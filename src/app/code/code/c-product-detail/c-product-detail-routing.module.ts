import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from 'src/app/features/product-detail/product-detail/product-detail.component';
import { CProductDetailWrapperComponent } from './design/c-product-detail-wrapper/c-product-detail-wrapper.component';

const routes: Routes = [
  { 
    path: '', component:ProductDetailComponent, pathMatch:'full'
  },
  {
    path:'design',
    component:ProductDetailComponent
  },
  {
    path: 'impl',
    component: CProductDetailWrapperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CProductDetailRoutingModule {}
