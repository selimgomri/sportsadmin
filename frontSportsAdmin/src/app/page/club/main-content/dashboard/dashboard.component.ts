import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent{
  clubId!: any;

  constructor(private router: Router) {

  }
  redirectToAddMember2() {
    this.router.navigate(['./ajouter-un-membre2']);
  }
}
