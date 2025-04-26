import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MediaBannerComponent } from './media-banner/media-banner.component';
import { FutureProofComponent } from './future-proof/future-proof.component';
import { BrandsComponent } from './brands/brands.component';
import { LeadershipSliderComponent } from './leadership-slider/leadership-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MediaBannerComponent,
    FutureProofComponent,
    BrandsComponent,
    LeadershipSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
