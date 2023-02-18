import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, mapTo, merge, Observable, Subject, tap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {
  
 
  isLoggedIn$ = this.auth.isLoggedIn$;
  private isPanelVisible:BehaviorSubject<boolean> = new BehaviorSubject(false);
  isPanelVisible$:Observable<boolean>|any//= this.isPanelVisible.asObservable();
  private isPanelHidden$:Observable<boolean>|any
  showPanel$:Observable<any> = new Observable<boolean>();
  @ViewChild("originOverlay", {read: ElementRef, static:true})
  private buttonEl: ElementRef | any;
  @ViewChild(CdkConnectedOverlay, {static: true})
  private connectedOverlay: CdkConnectedOverlay | any;

  constructor(private auth:AuthService, private fm:FocusMonitor, private cdr:ChangeDetectorRef,private router:Router) { }

  ngOnInit(): void {

    this.isPanelVisible$ = this.fm.monitor(this.buttonEl).pipe(
      filter(focussed => !!focussed),
      mapTo(true)
    )  ;
    this.isPanelHidden$ = this.connectedOverlay?.backdropClick.pipe(mapTo(false));
    this.showPanel$= merge(this.isPanelHidden$, this.isPanelVisible$);
    
  }
  ngAfterViewInit(){
    
    this.cdr.detectChanges();

    
  }

  signOut(){
    this.auth.signOut().subscribe({
      next:()=>{
        this.router.navigate(['/sign-in'])
      }
    });
  }
 

  

}
