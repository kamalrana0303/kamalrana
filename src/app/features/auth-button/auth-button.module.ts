import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { RouterModule } from '@angular/router';
import {OverlayModule, } from '@angular/cdk/overlay'
import {A11yModule} from '@angular/cdk/a11y';


@NgModule({
  declarations: [
    AuthButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    A11yModule
  ],
  exports:[AuthButtonComponent]
})
export class AuthButtonModule { }
