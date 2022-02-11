import { DashboardViewComponent } from './page/club/view/dashboard-view/dashboard-view.component';
import { ClubChoiceComponent } from './page/club-choice/club-choice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './page/landing-page/login-form.component';
import { EditClubViewComponent } from './page/club/view/edit-club-view/edit-club-view.component';
import { AjoutUserComponent } from './user/ajout-user/ajout-user.component';

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },
  {
    path: 'mes-clubs',
    component: ClubChoiceComponent,
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
    path: 'ajouter-un-membre',
    component: AjoutUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
