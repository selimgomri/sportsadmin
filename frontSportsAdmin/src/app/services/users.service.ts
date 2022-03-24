import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../IUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.baseUrl}/api/users`, {
      withCredentials: true,
    });
  }

  getLicensedUsers(): Observable<IUser> {
    return this.http.get<IUser>(
      `${environment.baseUrl}/api/users?exists[licenseNumber]=true`,
      {
        withCredentials: true,
      }
    );
  }

  getLicensedFilteredUsers(name: string): Observable<IUser> {
    return this.http.get<IUser>(
      `${environment.baseUrl}/api/users?exists[licenseNumber]=true&simplesearch=${name}`,
      {
        withCredentials: true,
      }
    );
  }

  getUnlicensedUsers(): Observable<IUser> {
    return this.http.get<IUser>(
      `${environment.baseUrl}/api/users?exists[licenseNumber]=false`,
      {
        withCredentials: true,
      }
    );
  }

  getUnlicensedFilteredUsers(name: string): Observable<IUser> {
    return this.http.get<IUser>(
      `${environment.baseUrl}/api/users?exists[licenseNumber]=false&simplesearch=${name}`,
      {
        withCredentials: true,
      }
    );
  }

  getUsersFiltered(name: string): Observable<IUser> {
    return this.http.get<IUser>(
      `${environment.baseUrl}/api/users?simplesearch=${name}`,
      { withCredentials: true }
    );
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/users`, data, {
      withCredentials: true,
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/api/users/${id}`, {
      withCredentials: true,
    });
  }

  updateUser(id: number, data: IUser): Observable<any> {
    return this.http.put(`${environment.baseUrl}/api/users/${id}`, data, {
      withCredentials: true,
    });
  }
}
