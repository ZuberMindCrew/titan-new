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
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { AdvisorsSectionComponent } from './advisors-section/advisors-section.component';
import { ServiceComponent } from './service/service.component';
import { ServicesSectionServiceComponent } from './services-section-service/services-section-service.component';
import { ProcessSectionComponent } from './process-section/process-section.component';
import { TermsComponent } from './terms/terms.component';
import { TermsPolicyComponent } from './terms-policy/terms-policy.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { ContactComponent } from './contact/contact.component';
import { CaseStudyTwoComponent } from './case-study-two/case-study-two.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

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
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ProfileSectionComponent,
    TeamSectionComponent,
    AdvisorsSectionComponent,
    ServiceComponent,
    ServicesSectionServiceComponent,
    ProcessSectionComponent,
    TermsComponent,
    TermsPolicyComponent,
    CaseStudyComponent,
    ContactComponent,
    CaseStudyTwoComponent,
    PrivacyComponent,
    PrivacyPolicyComponent
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
