import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../club';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http:HttpClient) { }

  getClub(id:number): Observable<Club> {
    return this.http.get<Club>(`${environment.baseUrl}/api/clubs/${id}`, { withCredentials: true });
  }

  updateClub(id: number, data: Club): Observable<any> {
    return this.http
    .put(`${environment.baseUrl}/api/clubs/${id}`, data, { withCredentials: true });
  }

  createClub(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/clubs`, data, { withCredentials: true });
  }
}
