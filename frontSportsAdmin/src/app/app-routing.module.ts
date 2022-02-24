import { CRUDSubscriptionViewComponent } from './page/club/view/crud-subscription-view/crud-subscription-view.component';
import { DashboardViewComponent } from './page/club/view/dashboard-view/dashboard-view.component';
import { ClubChoiceComponent } from './page/club-choice/club-choice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/landing-page/login/login.component';
import { EditClubViewComponent } from './page/club/view/edit-club-view/edit-club-view.component';
import { ListMembersViewComponent } from './page/club/view/list-members-view/list-members-view.component';
import { AjoutUserComponent } from './formMember/ajout-user/ajout-user.component';
import { FormUserComponent } from './formMember/form-user/form-user.component';
import { AuthGuard } from './shared/auth.guard';
import { ProfileComponent } from './page/club/main-content/profile/profile.component';
import { ProfileViewComponent } from './page/club/view/profile-view/profile-view.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'non-logged-in',
    },
  },

  {
    path: 'dashboard',
    component: DashboardViewComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'logged-in',
      Title: 'Tableau de bord',
    },
  },
  {
    path: 'editer-mon-club',
    component: EditClubViewComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'logged-in',
    },
  },
  {
    path: 'mes-clubs',
    component: ClubChoiceComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'logged-in',
    },
  },
  {
    path: 'liste-membres',
    component: ListMembersViewComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'logged-in',
    },
  },
  {
    path: 'gestion-des-cotisations',
    component: CRUDSubscriptionViewComponent,
  },

  {    path: 'ajouter-un-membre',
    component: AjoutUserComponent,
  },
  {    path: 'ajouter-un-membre2',
    component: FormUserComponent,
  },

  {
    path: 'ajouter-un-membre',
    component: AjoutUserComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'logged-in',
    },
  },
  {
    path: 'ajouter-un-membre2',
    component: FormUserComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'logged-in',
    },
  },
  {
    path: 'mon-profil',
    component: ProfileViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
