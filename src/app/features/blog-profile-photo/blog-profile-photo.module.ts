import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogProfilePhotoComponent } from './blog-profile-photo/blog-profile-photo.component';
import { ProfilePhotoModule } from '../profile-photo/profile-photo.module';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    BlogProfilePhotoComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    ProfilePhotoModule,
    
  ],
  exports:[BlogProfilePhotoComponent]
})
export class BlogProfilePhotoModule { }
