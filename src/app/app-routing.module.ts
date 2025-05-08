import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TermsComponent } from './terms/terms.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { ContactComponent } from './contact/contact.component';
import { CaseStudyTwoComponent } from './case-study-two/case-study-two.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'about', component: AboutComponent},
  {path:'service', component: ServiceComponent},
  {path:'terms', component: TermsComponent},
  {path:'case-study', component: CaseStudyComponent},
  {path:'contact', component: ContactComponent},
  {path:'case-study-two', component: CaseStudyTwoComponent},
  {path:'privacy',component: PrivacyComponent},
  {path:'privacy-policy',component: PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
