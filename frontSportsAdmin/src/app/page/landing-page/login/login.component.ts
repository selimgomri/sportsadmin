import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IUser } from '../../../IUser';
import { SessionLoginService } from '../../../services/session-login/session-login.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user = {
    email: '',
    password: '',
  };
  clubId!: any;

  //private userConnected!: IUser;

  constructor(
    private SessionLoginService: SessionLoginService,
    private route: Router,
    private ActivatedRoute: ActivatedRoute
  ) { //recup de l'id du club dans l'url
    this.ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.clubId = params;
    });}

  ngOnInit(): void {}

  login() {
    /* this.SessionLoginService.authentication(this.user).subscribe(
      () => {
        this.SessionLoginService.me().subscribe((responseMe) => {
          this.userConnected = responseMe;
          alert('login successful');
          console.log(this.userConnected);
          this.route.navigate(['/dashboard']);
        });
      },
      (err) => {
        console.log('Error: ', err);
        alert('login failed');
      }
    ); */

    let authFlow = this.SessionLoginService.authentication(this.user).pipe(
      switchMap(() => this.SessionLoginService.me())
    );

    authFlow.subscribe({
      next: (user: IUser) => {
        this.SessionLoginService.saveUserToLocalStorage(user);
        this.route.navigate(['/mes-clubs']);
      },
      error: (err) => {
        alert('login failed');
      },
    });
  }
}
