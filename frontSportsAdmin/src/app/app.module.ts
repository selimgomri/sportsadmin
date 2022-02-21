import { EditClubComponent } from './page/club/main-content/edit-club/edit-club.component';
import { PageMyclubsComponent } from './page/club-choice/page-myclubs//page-myclubs.component';
import { SideBarComponent } from './shared-content/side-bar/side-bar.component';
import { HeaderBarComponent } from './shared-content/header-bar/header-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './page/landing-page/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpXsrfInterceptorService } from './interceptors/http-xsrf-interceptor/http-xsrf-interceptor.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClubChoiceComponent } from './page/club-choice/club-choice.component';
import { SideBarClubComponent } from './page/club/shared/side-bar-club/side-bar-club.component';
import { DashboardComponent } from './page/club/main-content/dashboard/dashboard.component';
import { DashboardViewComponent } from './page/club/view/dashboard-view/dashboard-view.component';
import { EditClubViewComponent } from './page/club/view/edit-club-view/edit-club-view.component';
import { ListMembersComponent } from './page/club/main-content/list-members/list-members.component';
import { ListMembersViewComponent } from './page/club/view/list-members-view/list-members-view.component';
import { SearchExportComponent } from './search-export/search-export.component';
import { ListingComponent } from './listing/listing.component';
import { HeaderBarMesClubsComponent } from './shared-content/header-bar-mes-clubs/header-bar-mes-clubs.component';
import { AjoutUserComponent } from './formMember/ajout-user/ajout-user.component';
import { FormUserComponent } from './formMember/form-user/form-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './formMember/form-field/form-field.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { CRUDSubscriptionComponent } from './page/club/main-content/crud-subscription/crud-subscription.component';
import { CRUDSubscriptionViewComponent } from './page/club/view/crud-subscription-view/crud-subscription-view.component';
@NgModule({
  declarations: [
    AppComponent,
    ClubChoiceComponent,
    HeaderBarComponent,
    SideBarComponent,
    PageMyclubsComponent,
    EditClubComponent,
    SideBarClubComponent,
    DashboardComponent,
    LoginComponent,
    DashboardViewComponent,
    EditClubViewComponent,
    ListMembersComponent,
    ListMembersViewComponent,
    SearchExportComponent,
    ListingComponent,
    HeaderBarMesClubsComponent,
    AjoutUserComponent,
    FormUserComponent,
    FormFieldComponent,
    CustomFormComponent,
    CRUDSubscriptionComponent,
    CRUDSubscriptionViewComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
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

  bootstrap: [AppComponent],
})
export class AppModule {}
