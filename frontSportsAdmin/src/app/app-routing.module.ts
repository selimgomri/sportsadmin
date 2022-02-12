import { DashboardViewComponent } from './page/club/view/dashboard-view/dashboard-view.component';
import { ClubChoiceComponent } from './page/club-choice/club-choice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';import { LoginFormComponent } from './page/landing-page/login-form.component';
import { EditClubViewComponent } from './page/club/view/edit-club-view/edit-club-view.component';
import { PageMyclubsComponent } from './page/club-choice/page-myclubs/page-myclubs.component';

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardViewComponent,
  },
  {
    path: 'editer-mon-club',
    component: EditClubViewComponent,
  },
  {
    path: 'mes-clubs',
    component: PageMyclubsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
