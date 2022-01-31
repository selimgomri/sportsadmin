import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { Clubs } from '../mock-clubs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-myclubs',
  templateUrl: './page-myclubs.component.html',
  styleUrls: ['./page-myclubs.component.scss']
})
export class PageMyclubsComponent implements OnInit {
  clubs = Clubs;

  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['./dashboard']);
  }

  ngOnInit(): void {
  }
}
