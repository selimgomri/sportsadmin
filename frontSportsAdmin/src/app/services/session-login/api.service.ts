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
