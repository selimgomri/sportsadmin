import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from './Login';
import { Router } from '@angular/router';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';
import { IUser } from 'src/app/IUser';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  model: Login = new Login();

  public user = {
    email: '',
    password: '',
  };

  private userConnected!: IUser;

  constructor(
    private SessionLoginService: SessionLoginService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
    this.route.navigate(['/mes-clubs']);
  }

  login() {
    this.SessionLoginService.authentication(this.user).subscribe(
      () => {
        this.SessionLoginService.me().subscribe((responseMe) => {
          this.userConnected = responseMe;
          console.log(this.userConnected);
          this.route.navigate(['/dashboard']);
        });
      },
      (err) => console.log('Error: ', err)
    );
  }
}
