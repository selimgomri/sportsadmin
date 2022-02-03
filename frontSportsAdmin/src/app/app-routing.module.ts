import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditClubComponent } from './edit-club/edit-club.component';
import { BaseComponent } from './layouts/base/base.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },
  {
    path: 'mes-clubs',
    component: BaseComponent
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
