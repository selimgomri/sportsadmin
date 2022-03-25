import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClubService } from './services/club.service';
import { ApiService } from './services/session-login/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontSportsAdmin';
  primaryColor!: string;
  secondaryColor!: string;
  clubId!: any;

  constructor(
    private clubService: ClubService,
    private activatedRoute: ActivatedRoute
  ) {}

  /*   setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
  }
 */
  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search)
    this.clubId = params.get('id');
    this.clubService.getClub(this.clubId).subscribe((res) => {
      this.primaryColor = res.primarycolor;
      this.secondaryColor = res.secondarycolor;
      this.changeTheme(this.primaryColor, this.secondaryColor);
    });
  }

  /*   ngOnInit(): void {
    //recup des donnée du club par l'id
    console.log('CLUBID', this.clubId);
    this.clubService.getClub(this.clubId).subscribe((datas: any) => {
      this.club = datas;
      if (this.club.primarycolor) {
        this.primarycolor = this.club.primarycolor;
      } else {
        this.primarycolor = '#F6F4F5';
      }
      if (this.club.secondarycolor) {
        this.secondarycolor = this.club.secondarycolor;
      } else {
        this.secondarycolor = '#4AC285';
      }
    }); */

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }
}
