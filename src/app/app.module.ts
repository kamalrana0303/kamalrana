import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { AuthModule } from './features/auth/auth.module';
import { AuthService } from './features/auth/auth.service';
import { AuthButtonModule } from './features/auth-button/auth-button.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LikeModule } from './features/like/like.module';
import { connectDatabaseEmulator, getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { KScrollingCarouselModule } from './features/k-scrolling-carousel/k-scrolling-carousel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero/hero.component';
import { MoviesComponent } from './hero/movies/movies.component';
import { KKamalComponent } from './hero/k-kamal/k-kamal.component';
import { OverviewComponent } from './hero/overview/overview.component';
import { BlogComponent } from './hero/hero/blog/blog.component';
import { KamalTocModule } from './features/kamal-toc/kamal-toc.module';
import { ProductDetailModule } from './features/product-detail/product-detail.module';
import { ReviewModule } from './features/review/review.module';
import { BlogProfilePhotoModule } from './features/blog-profile-photo/blog-profile-photo.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MoviesComponent,
    KKamalComponent,
    OverviewComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    AuthButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      if(environment.useEmulators){
        connectAuthEmulator(auth, 'http://localhost:9099')
      }
      return auth;
    }),
    provideDatabase(() => {
      const db = getDatabase();
      if(environment.useEmulators){
        connectDatabaseEmulator(db,'localhost', 9000, {})
      }
      return db;
    }),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    GraphQLModule,
    HttpClientModule,
    LikeModule,
    KScrollingCarouselModule,
    KamalTocModule,
    ProductDetailModule,
    ReviewModule,
    BlogProfilePhotoModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
