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
import { StrategicOutlookComponent } from './strategic-outlook/strategic-outlook.component';
import { FiveSpecificComponent } from './five-specific/five-specific.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MediaBannerComponent,
    FutureProofComponent,
    BrandsComponent,
    LeadershipSliderComponent,
    StrategicOutlookComponent,
    FiveSpecificComponent,
    SuccessStoriesComponent
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
