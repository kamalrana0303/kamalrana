import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code/code.component';
import { RouterModule, Routes } from '@angular/router';
import { HtmlTextDirective } from './code-directive/html-text.directive';

const routes: Routes = [
  {
    path: '',
    component: CodeComponent,
    children: [
      {
        path: 'product-summary-design',
        loadChildren: () =>
          import('./code/c-product-detail/c-product-detail.module').then(
            (m) => m.CProductDetailModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [CodeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CodeModule {}
