import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ApiReducer } from './core/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './core/store/effects';
import { ApiiService } from './core/services/apii.service';
import { AlbumsComponent } from './core/components/albums/albums.component';
import { CommentsComponent } from './core/components/comments/comments.component';
import { AlbumsPageComponent } from './core/pages/albums-page/albums-page.component';
import { CommentsPageComponent } from './core/pages/comments-page/comments-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/module/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    CommentsComponent,
    AlbumsPageComponent,
    CommentsPageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ apiData: ApiReducer }),
    EffectsModule.forRoot([DataEffects]),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [ApiiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
