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

const appRoutes: Routes = [
  {path: '',redirectTo: 'dashboard' ,pathMatch: 'full'},

  {path: 'dashboard',
  children:[
    {path: '',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about-us',component:AboutUsComponent}

  ],
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    OurServicesComponent
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
