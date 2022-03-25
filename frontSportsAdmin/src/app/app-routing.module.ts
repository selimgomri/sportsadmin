import { CRUDSubscriptionViewComponent } from './page/club/view/crud-subscription-view/crud-subscription-view.component';
import { DashboardViewComponent } from './page/club/view/dashboard-view/dashboard-view.component';
import { ClubChoiceComponent } from './page/club-choice/club-choice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/landing-page/login/login.component';
import { EditClubViewComponent } from './page/club/view/edit-club-view/edit-club-view.component';
import { ListMembersViewComponent } from './page/club/view/list-members-view/list-members-view.component';
import { AjoutUserViewComponent } from './page/club/view/ajout-user-view/ajout-user-view.component';
import { AuthGuard } from './shared/auth.guard';
import { ProfileViewComponent } from './page/club/view/profile-view/profile-view.component';
import { AddUserComponent } from './page/club/main-content/edit-club/crud-user/add-user/add-user.component';
import { CreateUserViewComponent } from './page/club/view/create-user-view/create-user-view.component';
import { CreateProfileComponent } from './page/club/main-content/crud-club/create-profile.component';
import { CreateClubComponent } from './page/club/main-content/crud-club/create-club/create-club.component';
import { CreateClubViewComponent } from './page/club/view/create-club-view/create-club-view.component';
import { CreateProfileViewComponent } from './page/club/view/create-profile-view/create-profile-view.component';
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

  { path: 'ajouter-un-membre', component: AjoutUserViewComponent },
  { path: 'ajouter-un-membre2', component: AjoutUserViewComponent },

  {
    path: 'ajouter-un-membre',
    component: AjoutUserViewComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'logged-in',
    },
  },
  {
    path: 'ajouter-un-membre2',
    component: AjoutUserViewComponent,
    canActivate: [AuthGuard],
    data: {
      userType: 'logged-in',
    },
  },
  {
    path: 'mon-profil',
    component: ProfileViewComponent,
  },
  {
    path: 'ajouter-membre',
    component: CreateUserViewComponent,
  },
  {
    path: 'creer-mon-profil',
    component:CreateProfileViewComponent,
  },
  {
    path: 'creer-mon-club',
    component:CreateClubViewComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
