import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApiService } from './services/session-login/api.service';
import { Club } from 'src/app/club';
import { Clubs } from './mock-clubs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontSportsAdmin';
  primaryColor! : string;
  secondaryColor! : string;


  constructor(
    private route: Router,

    private apiService : ApiService,
  ) {}

  setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
  }

  ngOnInit(): void {
    this.apiService.getClub(2).subscribe((res) => {
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
