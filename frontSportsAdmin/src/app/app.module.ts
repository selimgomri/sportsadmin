import { PageMyclubsComponent } from './page-myclubs/page-myclubs.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderBarComponent } from './shared/header-bar/header-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClubChoiceComponent } from './club-choice/club-choice.component';

@NgModule({
  declarations: [AppComponent, LoginFormComponent, ClubChoiceComponent, HeaderBarComponent, SideBarComponent,PageMyclubsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
