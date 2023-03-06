import { FocusMonitor } from '@angular/cdk/a11y';
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ScrollStrategy,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';
import { OverlayReference } from '@angular/cdk/overlay/typings/overlay-reference';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  filter,
  mapTo,
  merge,
  Observable,
  Subject,
  tap,
} from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent implements OnInit {
  isLoggedIn$ = this.auth.isLoggedIn$;
  isPanelVisible$: Observable<boolean> | any; //= this.isPanelVisible.asObservable();
  private isPanelHidden$: Observable<boolean> | any;
  showPanel$: Observable<any> = new Observable<boolean>();
  @ViewChild('originOverlay', { read: ElementRef, static: true })
  private buttonEl: ElementRef | any;
  @ViewChild(CdkConnectedOverlay, { static: true })
  private connectedOverlay?: CdkConnectedOverlay;
  private isScroll= new EventEmitter<boolean>();
  private isClick = new EventEmitter<boolean>();
  
  
  scrollStrategy?: ScrollStrategy|any
  // =this.scrollStrategies.close({
  //   threshold:10
  // })
  constructor(
    private auth: AuthService,
    private fm: FocusMonitor,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scrollStrategy = new ConfirmScrollStrategy(this.isScroll);
    this.isPanelVisible$ = this.fm.monitor(this.buttonEl).pipe(

      filter((focussed) => !!focussed),
  
      mapTo(true),
    );
    this.isPanelHidden$ = this.connectedOverlay?.backdropClick.pipe(
     
      mapTo(false)
    );

    this.showPanel$ = merge(this.isPanelHidden$, this.isPanelVisible$, this.isScroll, this.isClick);
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  signOut() {
    this.auth.signOut().subscribe({
      next: () => {
        this.router.navigate(['/sign-in']);
      },
    });
  }

  onClick(){
    this.isClick?.next(true);
  }
  
}

class ConfirmScrollStrategy implements ScrollStrategy {
  _overlay?: OverlayReference;
  constructor(private isScroll$?:Subject<boolean>) {}
  enable() {
    document.addEventListener('scroll', this.scrollListener);
  }

  disable() {
    document.removeEventListener('scroll', this.scrollListener);
  }

  attach(overlayRef: OverlayReference) {
    this._overlay = overlayRef;
  }

  private scrollListener = (event:any) => {
    this._overlay?.detach();
    this.isScroll$?.next(false);
    return;
  };
}
