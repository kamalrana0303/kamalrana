import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/auth/auth.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  title = 'kamalrana';
  isLoggedIn$ = this.auth.isLoggedIn$;
  user$:Observable<User|null>= this.auth.user$;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

}
