import { ISubscription } from './ISubscription';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private $url = 'https://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getSubscriptions(): Observable<ISubscription> {
    return this.http.get<ISubscription>(`${this.$url}/subscriptions`);
  }
}
