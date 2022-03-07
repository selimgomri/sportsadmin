import { EditSubscription } from './page/club/main-content/crud-subscription/edit-subscription/edit-subscription';
import { EditClubComponent } from './page/club/main-content/edit-club/edit-club.component';
import { PageMyclubsComponent } from './page/club-choice/page-myclubs//page-myclubs.component';
import { SideBarComponent } from './shared-content/side-bar/side-bar.component';
import { HeaderBarComponent } from './shared-content/header-bar/header-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpXsrfInterceptorService } from './interceptors/http-xsrf-interceptor/http-xsrf-interceptor.service';
import { LoginComponent } from './page/landing-page/login/login.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { FormModalComponent } from './formMember/form-modal/form-modal.component';
import { CRUDSubscriptionComponent } from './page/club/main-content/crud-subscription/crud-subscription.component';
import { CRUDSubscriptionViewComponent } from './page/club/view/crud-subscription-view/crud-subscription-view.component';
import { VerifyModal } from './page/club/main-content/crud-subscription/verify-modal/verify-modal';
import { NgbdSortableHeader } from './listing/listing.component';
import { ProfileComponent } from './page/club/main-content/profile/profile.component';
import { ProfileViewComponent } from './page/club/view/profile-view/profile-view.component';
import { ViewComponent } from './page/club/main-content/profile/view.component';
import { CreateSubscription } from './page/club/main-content/crud-subscription/create-subscription/create-subscription';
import { AjoutUserViewComponent } from './page/club/view/ajout-user-view/ajout-user-view.component';
import { AddUserComponent } from './page/club/main-content/edit-club/crud-user/add-user/add-user.component';
import { CreateUserViewComponent } from './page/club/view/create-user-view/create-user-view.component';
import { EditUserComponent } from './page/club/main-content/edit-club/crud-user/edit-user/edit-user.component';
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
    CustomFormComponent,
    FormModalComponent,
    CRUDSubscriptionComponent,
    CRUDSubscriptionViewComponent,
    VerifyModal,
    NgbdSortableHeader,
    ProfileComponent,
    ProfileViewComponent,
    ViewComponent,
    CreateSubscription,
    AjoutUserViewComponent,
    AddUserComponent,
    CreateUserViewComponent,
    EditSubscription,
    EditUserComponent,



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
    NgbActiveModal,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpXsrfInterceptorService,
      multi: true,
    },
    Title,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
