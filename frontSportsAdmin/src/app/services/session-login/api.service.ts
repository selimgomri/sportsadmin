import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from 'src/app/IUser';
import { Club } from 'src/app/club';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private $url = 'https://localhost:8000/api';
    constructor(private http: HttpClient) {}

    getUser(): Observable<IUser> {
      return this.http.get<IUser>(`${this.$url}/me`)
    }

    getUsers(): Observable<IUser> {
      return this.http.get<IUser>(`${this.$url}/users`);
    }

    getClubs(): Observable<Club> {
      return this.http.get<Club>(`${this.$url}/club_users/{id}`);
    }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    updateProfile(id:number, data:IUser): Observable<any> {

      return this.http.put(`${this.$url}/me`, JSON.stringify(data), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
    }

    errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
   }

   find(id:number): Observable<any> {
    return this.http.get(`${this.$url}/me`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

}
