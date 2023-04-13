import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';

import { RouterModule,Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './dashboard/home/home.component';
import { OurServicesComponent } from './dashboard/our-services/our-services.component';
import { OurProgramsComponent } from './dashboard/our-programs/our-programs.component';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'our-services', component:OurServicesComponent},
  {path: 'our-programs', component:OurProgramsComponent},
  {path: '',redirectTo: '/home' ,pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    OurServicesComponent,
    OurProgramsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {provide:APP_BASE_HREF,useValue:'/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
