import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionLoginService {
  LOGIN_URL = '/api/users';
  LOGOUT_URL = '/logout';

  constructor(private httpClient: HttpClient) {}

  getUser() {
    const url2 = `${environment.baseUrl}/api/users`;
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    console.log(url2);
    this.httpClient.get(url2).subscribe((result) => console.log(result));
  }

  login(pUsername: string, pPassword: string) {
    const loginData = {
      username: pUsername,
      password: pPassword,
    };
    console.log(environment.baseUrl + this.LOGIN_URL);
    return new Observable<boolean>((observer) => {
      this.httpClient

        .post(environment.baseUrl + this.LOGIN_URL, loginData)

        .subscribe(
          (result) => {
            observer.next(true);
            observer.complete();
          },
          (error) => {
            observer.error(false);
            observer.complete();
          }
        );
    });
  }

  logout() {
    return new Observable<boolean>((observer) => {
      this.httpClient.get(environment.baseUrl + this.LOGOUT_URL).subscribe(
        (result) => {
          observer.next(true);
          observer.complete;
        },
        (error) => {
          observer.error(false);
          observer.complete();
        }
      );
    });
  }
}
