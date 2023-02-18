import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './hero/blog/blog.component';
import { HeroComponent } from './hero/hero.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
      {
        path: 'overview', component: OverviewComponent, pathMatch: 'full'
      },
      {
        path: 'blog', component: BlogComponent
      },
      {
        path: '', redirectTo: 'overview',pathMatch:'full'
      },
      {
        path: '**', redirectTo:''
      }
    ],
    
  },
  {
    path:'**', redirectTo:'', pathMatch:'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
