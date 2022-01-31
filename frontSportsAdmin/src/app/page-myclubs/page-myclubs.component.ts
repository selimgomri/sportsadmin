import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-myclubs',
  templateUrl: './page-myclubs.component.html',
  styleUrls: ['./page-myclubs.component.scss']
})
export class PageMyclubsComponent implements OnInit {

  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['./dashboard']);
  }

  ngOnInit(): void {
  }
}
