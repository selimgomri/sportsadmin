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
      console.log(this.clubId['id']);
    });
  }
  redirectToAddMember2() {
    this.router.navigate(['./ajouter-un-membre2']);
  }

  ngOnInit(): void {

  }
}
