import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontSportsAdmin';

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}
  setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
  }

  ngOnInit(): void {}
}
