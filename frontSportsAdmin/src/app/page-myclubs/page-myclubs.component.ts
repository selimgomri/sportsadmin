import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { Clubs } from '../mock-clubs';

@Component({
  selector: 'app-page-myclubs',
  templateUrl: './page-myclubs.component.html',
  styleUrls: ['./page-myclubs.component.scss']
})
export class PageMyclubsComponent implements OnInit {
  clubs = Clubs;
  constructor() { }

  ngOnInit(): void {
  }

}
