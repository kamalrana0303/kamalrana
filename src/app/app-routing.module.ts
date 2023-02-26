import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';

import {AuthGuard, redirectLoggedInTo, canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { HeroComponent } from './hero/hero/hero.component';
import { OverviewComponent } from './hero/overview/overview.component';
import { BlogComponent } from './hero/hero/blog/blog.component';
const routes: Routes = [
  {
    path: '', component:HeroComponent, children: [
      {
        path: 'overview', component: OverviewComponent, pathMatch: 'full'
      },
      {
        path: 'blog', component:BlogComponent
      },
      {
        path: '', redirectTo: 'overview', pathMatch:'full'
      }
    ]
  },
  {
    path: 'ui', loadChildren:()=> import('./code/code.module').then(m=>m.CodeModule)
  },
  {
    path: 'edu', loadChildren: ()=>import('./education/education.module').then(m=>m.EducationModule)
  },
  {
    path:'intro' , loadChildren:()=> import('./intro/intro.module').then(m=>m.IntroModule)
  },
  {
    path: 'sign-up', component: SignUpComponent, ...canActivate(()=> redirectLoggedInTo(['']))
  },
  {
    path: 'review', loadChildren:()=> import('./features/reviews/reviews.module').then(m=>m.ReviewsModule)
  },
  {
    path:'sign-in', component:SignInComponent, canActivate: [AuthGuard], data:{
      authGuardPipe: ()=> redirectLoggedInTo([''])
    }
  },
  {
    path:'chat', ...canActivate(()=> {
      return redirectUnauthorizedTo("sign-in")
    }),loadChildren: ()=> import("./features/chat/chat.module").then(m=>m.ChatModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
