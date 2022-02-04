import { PageMyclubsComponent } from './main-content/page-myclubs/page-myclubs.component';
import { SideBarComponent } from './shared-content/side-bar/side-bar.component';
import { HeaderBarComponent } from './shared-content/header-bar/header-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './page/landing-page/login-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClubChoiceComponent } from './page/club-choice/club-choice.component';

@NgModule({
  declarations: [AppComponent, LoginFormComponent, ClubChoiceComponent, HeaderBarComponent, SideBarComponent,PageMyclubsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
