import { OverlayRef } from '@angular/cdk/overlay';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss'],
})
export class ProfilePhotoComponent implements OnInit {
    Capacitor=Capacitor;
  ref?: OverlayRef;
  title: any = 'Profile photo';
  imgChangeEvt: any = '';
  cropImgPreview: any = null;
  desktopMyPhoto: any = null;
  mobileMyPhoto:any = null;
  widget?: TemplateRef<any>|any;
  @ViewChild('photoWidget')
  photoWidget?: TemplateRef<any>;
  @ViewChild('editPhotoWidget')
  editPhotoWidget?: TemplateRef<any>;
  @ViewChild("cropper")
  cropper?:ImageCropperComponent;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.widget = this.photoWidget;
  }

  onFileChange(event: any): void {
    this.imgChangeEvt = event;
    this.title = 'Edit photo';
    this.widget = this.editPhotoWidget;
  }

  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
  }

  imgLoad() {
    // display cropper tool
  }
  initCropper() {
    // init cropper
  }

  imgFailed() {
    // error msg
  }

  close() {
    this.ref?.detach();
  }

  save() {
    this.cropImgPreview = this.cropper?.crop()?.base64;
    this.desktopMyPhoto =this.cropImgPreview;
    this.mobileMyPhoto =this.cropImgPreview;
    this.title= "Profile photo"
    this.widget = this.photoWidget;
    
  }

  async selectImage() {
    
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    });
    this.mobileMyPhoto = `data:image/jpeg;base64,${image.base64String}`;
    this.desktopMyPhoto = null;
    this.title= 'Edit photo'
    this.widget = this.editPhotoWidget;
  }
}
