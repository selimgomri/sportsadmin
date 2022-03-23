import { Component, OnInit } from '@angular/core';
import { Clubs } from '../../../mock-clubs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/session-login/api.service';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'page-myclubs',
  templateUrl: './page-myclubs.component.html',
  styleUrls: ['./page-myclubs.component.scss'],
})
export class PageMyclubsComponent implements OnInit {
  clubs = Clubs;
  clubId!: any;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiService.getClubs().subscribe((datas: any) => {
      this.clubs = datas['hydra:member'];

    });
  }


  redirectToDashboard(id: number) {
    // this.getClub();

    this.router.navigate(['./dashboard'], {
      //mise en place du parametre id d'un club
      queryParams: { id: id },
    });
  }

  redirectToCreateMyClub() {
    this.router.navigate(['./creer-mon-club']);
  }
}
