import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from 'src/app/IUser';
import { Club } from 'src/app/club';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private $url = 'https://localhost:8000/api';
    constructor(private http: HttpClient) {}

    getUsers(): Observable<IUser> {
      return this.http.get<IUser>(`${this.$url}/users`);
    }

    getClubs(): Observable<Club> {
      return this.http.get<Club>(`${this.$url}/clubs`);
    }
  }
