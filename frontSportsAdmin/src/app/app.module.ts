import { BaseModule } from './layouts/base/base.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, LoginFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FlexLayoutModule, BaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
