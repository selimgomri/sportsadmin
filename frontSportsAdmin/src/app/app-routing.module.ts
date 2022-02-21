import { DashboardViewComponent } from './page/club/view/dashboard-view/dashboard-view.component';
import { ClubChoiceComponent } from './page/club-choice/club-choice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/landing-page/login/login.component';
import { EditClubViewComponent } from './page/club/view/edit-club-view/edit-club-view.component';
import { PageMyclubsComponent } from './page/club-choice/page-myclubs/page-myclubs.component';
import { ListMembersViewComponent } from './page/club/view/list-members-view/list-members-view.component';
import { AjoutUserComponent } from './formMember/ajout-user/ajout-user.component';
import { FormUserComponent } from './formMember/form-user/form-user.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
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
    component: ClubChoiceComponent,
  },
  {
    path: 'liste-membres',
    component: ListMembersViewComponent
  },

  {    path: 'ajouter-un-membre',
    component: AjoutUserComponent,
  },
  {    path: 'ajouter-un-membre2',
    component: FormUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
