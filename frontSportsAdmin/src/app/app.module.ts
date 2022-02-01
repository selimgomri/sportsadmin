import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageMyclubsComponent } from './page-myclubs/page-myclubs.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditClubComponent } from './edit-club/edit-club.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PageMyclubsComponent,
    HeaderBarComponent,
    DashboardComponent,
    EditClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
