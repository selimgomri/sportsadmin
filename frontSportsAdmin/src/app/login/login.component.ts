import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionLoginService } from '../services/session-login/session-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  wrongCredentials = false;

  constructor(
    private sessionLogin: SessionLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.wrongCredentials = false;
    this.sessionLogin.login(this.username, this.password).subscribe(
      (result) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.wrongCredentials = true;
      }
    );
  }
}
