import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  usersNumber!: number;
  licensedNumber!: number;
  unlicensedNumber!: number;

  redirectToAddMember2() {
    this.router.navigate(['./ajouter-un-membre2']);
  }
  getUsersLength(users:any) {
    this.usersNumber = users;
  }
  getLicensedLength(users:any) {
    this.licensedNumber = users;
  }
  getUnlicensedLength(users:any) {
    this.unlicensedNumber = users;
  }
  ngOnInit(): void {
  }

}
