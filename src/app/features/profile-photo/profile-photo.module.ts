import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ChangePhotoComponent } from './change-photo/change-photo.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';



@NgModule({
  declarations: [
    ProfilePhotoComponent,
    ChangePhotoComponent,
    EditPhotoComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule
  ],
  exports: [
    ProfilePhotoComponent
  ]
})
export class ProfilePhotoModule { }
