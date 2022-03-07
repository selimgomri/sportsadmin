import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../IUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  updateProfile(id: number, data: any): Observable<any> {
    return this.http
    .put(`${environment.baseUrl}/api/users/${id}`, data, { withCredentials: true });
  }

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.baseUrl}/api/users`, { withCredentials: true });
  }

}
