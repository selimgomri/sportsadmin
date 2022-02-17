import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-bar-club',
  templateUrl: './side-bar-club.component.html',
  styleUrls: ['./side-bar-club.component.scss']
})
export class SideBarClubComponent implements OnInit {

  constructor(private router: Router) { }

  redirectToAddMember() {
    this.router.navigate(['./ajouter-un-membre']);
  }

  ngOnInit(): void {
  }

}
