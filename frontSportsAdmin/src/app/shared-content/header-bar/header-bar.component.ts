import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/IUser';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  template: `<header>{{ title }}</header>`,
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();

  user!: IUser;

  constructor(private auth: SessionLoginService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.titleChanged.emit(this.title);
  }

  ngOnInit(): void {
    this.auth.me().subscribe((data) => {
      this.user = data;
    });

  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }


}
