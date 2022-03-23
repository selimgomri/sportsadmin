import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Club } from 'src/app/club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'side-bar-club',
  templateUrl: './side-bar-club.component.html',
  styleUrls: ['./side-bar-club.component.scss'],
})
export class SideBarClubComponent implements OnInit {
  club!: Club;
  clubId!: any;

  constructor(
    private router: Router,
    private clubService: ClubService,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.clubId = params;
    });
  }

  redirectToAddMember() {
    this.router.navigate(['./ajouter-un-membre']);
  }

  ngOnInit(): void {
    this.clubService.getClub(this.clubId['id']).subscribe((datas: any) => {
      this.club = datas;
    });
  }

  redirectToEditClub() {
    this.router.navigate(['./editer-mon-club'], {
      queryParams: { id: this.clubId['id'] },
    });
  }
}
