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
import { ServicesSectionComponent } from './services-section/services-section.component';
import { WhyTitanComponent } from './why-titan/why-titan.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { ExecutiveForumComponent } from './executive-forum/executive-forum.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HomeComponent } from './home/home.component';

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
    SuccessStoriesComponent,
    ServicesSectionComponent,
    WhyTitanComponent,
    WorkWithUsComponent,
    ExecutiveForumComponent,
    HeroBannerComponent,
    HomeComponent
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
