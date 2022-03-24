import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, empty, Observable } from 'rxjs';

import { IUser } from 'src/app/IUser';

@Injectable({
  providedIn: 'root',
})
export class SessionLoginService {
  userProfile: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    roles: [],
    licenseNumber: '',
    password: '',
    birthdate: new Date(),
    sexe: '',
    level: [],
    additionnalField: [],
    photo: [],
    address: '',
  });

  constructor(private http: HttpClient) {
    /* this.loadUserFromLocalStorage(); */
  }

  authentication(user: any) {
    return this.http.post('https://localhost:8000/authentication_token', user, {
      withCredentials: true,
    });
  }

  me() {
    return this.http.get<IUser>('https://localhost:8000/api/me', {
      withCredentials: true,
    });
  }

  saveUserToLocalStorage(user: IUser) {
    this.userProfile.next(user);
    localStorage.setItem('me', JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem('me');

  }

/*   loadUserFromLocalStorage(): IUser {
    if (this.userProfile.value.id == 0) {
      let fromLocalStorage = localStorage.getItem('me');
      if (fromLocalStorage) {
        let userInfo = JSON.parse(fromLocalStorage);
        this.userProfile.next(userInfo);
      }
    }

    return this.userProfile.value;
  } */
}
