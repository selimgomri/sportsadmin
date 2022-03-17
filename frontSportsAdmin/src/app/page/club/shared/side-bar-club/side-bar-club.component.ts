import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'side-bar-club',
  templateUrl: './side-bar-club.component.html',
  styleUrls: ['./side-bar-club.component.scss']
})
export class SideBarClubComponent implements OnInit {
  @Input() club!: Club;

  constructor(private router: Router, private clubService: ClubService) { }

  redirectToAddMember() {
    this.router.navigate(['./ajouter-un-membre']);
  }

  ngOnInit(): void {
    this.clubService.getClub(5).subscribe((datas: any) => {
      console.log(datas);
      this.club = datas;
      console.log(this.club);
    });
  }
}
