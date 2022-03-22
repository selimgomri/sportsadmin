import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../IUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.baseUrl}/api/users`, { withCredentials: true });
  }

  getUsersFiltered(name: string): Observable<IUser> {
    return this.http.get<IUser>(`${environment.baseUrl}/api/users?firstname=${name}`, { withCredentials: true });
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/users`, data, { withCredentials: true });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/api/users/${id}`, { withCredentials: true });
  }

  updateUser(id: number, data: IUser): Observable<any> {
    return this.http
    .put(`${environment.baseUrl}/api/users/${id}`, data, { withCredentials: true });
  }
}
