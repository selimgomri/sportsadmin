import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from 'src/app/IUser';
import { Club } from 'src/app/club';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private $url = 'https://localhost:8000/api';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(`${this.$url}/users`, { withCredentials: true });
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.$url}/users`, data, { withCredentials: true });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.$url}/users/${id}`, { withCredentials: true });
  }

  updateUser(id: number, data: IUser): Observable<any> {
    return this.http
    .put(`${this.$url}/users/${id}`, data, { withCredentials: true });
  }

  getClubs(): Observable<Club> {
    return this.http.get<Club>(`${this.$url}/clubs`,);
  }

  getClub(id: Number): Observable<any> {
    return this.http.get<any>(`${this.$url}/clubs/${id}`);
  }


  find(id: number): Observable<any> {
    return this.http.get(`${this.$url}/users/${id}`);
  }
}
