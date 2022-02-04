import { ClubChoiceComponent } from './page/club-choice/club-choice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main-content/dashboard/dashboard.component';
import { EditClubComponent } from './main-content/edit-club/edit-club.component';
import { LoginFormComponent } from './page/landing-page/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },
  {
    path: 'mes-clubs',
    component: ClubChoiceComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'editer-mon-club',
    component: EditClubComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
