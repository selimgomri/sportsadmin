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

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.$url}/me`);
  }

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(`${this.$url}/users`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.$url}/users`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.$url}/users/${id}`)
    .pipe(catchError(this.errorHandler));
  }

  updateUser(id: number, data: IUser): Observable<any> {
    return this.http
    .put(`${this.$url}/users/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  updateProfile(id: number, data: IUser): Observable<any> {
    return this.http
    .put(`${this.$url}/users/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  getClubs(): Observable<Club> {
    return this.http.get<Club>(`${this.$url}/clubs`,);
  }

  getClub(id: Number): Observable<any> {
    return this.http.get<any>(`${this.$url}/clubs/${id}`);
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.$url}/users/${id}`).pipe(catchError(this.errorHandler));
  }
}
