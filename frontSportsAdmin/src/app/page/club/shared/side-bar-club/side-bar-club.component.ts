import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/club';
import { Clubs } from 'src/app/mock-clubs';
import { ApiService } from 'src/app/services/session-login/api.service';

@Component({
  selector: 'side-bar-club',
  templateUrl: './side-bar-club.component.html',
  styleUrls: ['./side-bar-club.component.scss']
})
export class SideBarClubComponent implements OnInit {
  clubs = Clubs;

  constructor(private router: Router, private apiService: ApiService) { }

  redirectToAddMember() {
    this.router.navigate(['./ajouter-un-membre']);
  }

  ngOnInit(): void {  this.apiService.getClubs().subscribe((datas: any) => {
    this.clubs = datas['hydra:member'];
  });
  }

}
