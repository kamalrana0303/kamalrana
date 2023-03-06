import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { ProfilePhotoComponent } from '../../profile-photo/profile-photo/profile-photo.component';

@Component({
  selector: 'blog-profile-photo',
  templateUrl: './blog-profile-photo.component.html',
  styleUrls: ['./blog-profile-photo.component.scss'],
})
export class BlogProfilePhotoComponent implements OnInit {
  photo = '../../../../assets/kamal-profile-photo.jpg';
  cover = '../../../../assets/kamal-profile-cover.jpg';
  overlayRef?: OverlayRef;
  constructor(private _overlay: Overlay) {}

  ngOnInit(): void {}

  editPhoto() {
    this.overlayRef = this._overlay.create({
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
      panelClass: 'panelClass',
    });
    const componentPortal = new ComponentPortal(ProfilePhotoComponent);
    const componentRef = this.overlayRef.attach(componentPortal);
    componentRef.instance.desktopMyPhoto = this.photo;
    componentRef.instance.ref = this.overlayRef;
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef?.detach();
    });
  }
}
