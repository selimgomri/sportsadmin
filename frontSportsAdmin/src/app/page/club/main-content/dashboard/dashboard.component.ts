import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  clubId!: any;

  constructor(private router: Router, private ActivatedRoute: ActivatedRoute) {
    this.ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.clubId = params;
    });
  }

  usersNumber!: number;
  licensedNumber!: number;
  unlicensedNumber!: number;


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
