import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  apiUrl = `${environment.baseUrl}/api`;

  fetchMemberList(): Promise<any> {
    return fetch(this.apiUrl)
      .then((response) => response.json())
      .then(
        (result) => {
          return result.results;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  getMemberList(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
