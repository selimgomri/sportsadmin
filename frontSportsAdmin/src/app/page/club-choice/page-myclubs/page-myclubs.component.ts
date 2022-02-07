import { Component, OnInit } from '@angular/core';
import { Clubs } from '../../../mock-clubs';
import { Router } from '@angular/router';


@Component({
  selector: 'page-myclubs',
  templateUrl: './page-myclubs.component.html',
  styleUrls: ['./page-myclubs.component.scss']
})
export class PageMyclubsComponent implements OnInit {
  clubs = Clubs;

  constructor(private router: Router) { }

  redirectToDashboard() {
    this.router.navigate(['./dashboard']);
  }

  redirectToEditMyClub() {
    this.router.navigate(['./editer-mon-club']);
  }

  ngOnInit(): void {
  }
}
