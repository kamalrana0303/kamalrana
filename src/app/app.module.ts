import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AuthModule } from './features/auth/auth.module';
import { AuthService } from './features/auth/auth.service';
import { AuthButtonModule } from './features/auth-button/auth-button.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LikeModule } from './features/like/like.module';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { KScrollingCarouselModule } from './features/k-scrolling-carousel/k-scrolling-carousel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    AuthButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    GraphQLModule,
    HttpClientModule,
    LikeModule,
    KScrollingCarouselModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
