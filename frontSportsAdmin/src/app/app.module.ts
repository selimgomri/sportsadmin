import { EditClubComponent } from './page/club/main-content/edit-club/edit-club.component';
import { PageMyclubsComponent } from './page/club-choice/page-myclubs//page-myclubs.component';
import { SideBarComponent } from './shared-content/side-bar/side-bar.component';
import { HeaderBarComponent } from './shared-content/header-bar/header-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {
  HttpClientModule,
  HttpClientXsrfModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { HttpXsrfInterceptorService } from './interceptors/http-xsrf-interceptor/http-xsrf-interceptor.service';
import { LoginFormComponent } from './page/landing-page/login-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClubChoiceComponent } from './page/club-choice/club-choice.component';
import { SideBarClubComponent } from './page/club/shared/side-bar-club/side-bar-club.component';
import { DashboardComponent } from './page/club/main-content/dashboard/dashboard.component';
import { DashboardViewComponent } from './page/club/view/dashboard-view/dashboard-view.component';
import { EditClubViewComponent } from './page/club/view/edit-club-view/edit-club-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ClubChoiceComponent,
    HeaderBarComponent,
    SideBarComponent,
    PageMyclubsComponent,
    EditClubComponent,
    SideBarClubComponent,
    DashboardComponent,
    LoginComponent,
    DashboardViewComponent,
    EditClubViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpXsrfInterceptorService,
      multi: true,
    },
    ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
