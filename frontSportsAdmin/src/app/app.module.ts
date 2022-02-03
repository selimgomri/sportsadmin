import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageMyclubsComponent } from './shared/page-myclubs/page-myclubs.component';
import { HeaderBarComponent } from './shared/header-bar/header-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditClubComponent } from './edit-club/edit-club.component';
<<<<<<< HEAD
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
=======
import { SideBarComponent } from './side-bar/side-bar.component';
>>>>>>> 45faadcb4ef2f72f333612e109cd09e1534f50c9


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PageMyclubsComponent,
    HeaderBarComponent,
    DashboardComponent,
    EditClubComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
