import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from './services/session-login/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontSportsAdmin';
  primaryColor! : string;
  secondaryColor! : string;
  clubId!: any;


  constructor(
    private route: Router,
    private ActivatedRoute: ActivatedRoute,
    private apiService : ApiService,
  ) {
    this.ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.clubId = params;
    });
  }

  setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
  }

  ngOnInit(): void {
    this.apiService.getClub(this.clubId['id']).subscribe((res) => {
      this.primaryColor = res.primarycolor;
      this.secondaryColor = res.secondarycolor;
      this.changeTheme(this.primaryColor, this.secondaryColor);
    });
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }
}
