import { Component, OnInit } from '@angular/core';
import { Clubs } from '../../../mock-clubs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/session-login/api.service';

@Component({
  selector: 'page-myclubs',
  templateUrl: './page-myclubs.component.html',
  styleUrls: ['./page-myclubs.component.scss']
})
export class PageMyclubsComponent implements OnInit {
  clubs = Clubs;

  constructor(private router: Router, private apiService: ApiService) { }

  redirectToDashboard() {
    this.router.navigate(['./dashboard']);
  }

  redirectToEditMyClub() {
    this.router.navigate(['./editer-mon-club']);
  }

  ngOnInit(): void {
    this.apiService.getClubs().subscribe((datas: any) => {
      this.clubs = datas['hydra:member'];
      console.log(this.clubs);
    });
  }
}
