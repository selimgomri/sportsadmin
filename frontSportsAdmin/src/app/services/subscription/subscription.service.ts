import { ISubscription } from './ISubscription';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private $url = 'https://localhost:8000/api/subscription_formulas';
  constructor(private http: HttpClient) {}

  getSubscriptions(): Observable<ISubscription> {
    return this.http.get<ISubscription>(this.$url, { withCredentials: true });
  }

  deleteSubscription(id: Number): Observable<any> {
    return this.http.delete(`${this.$url}/${id}`, { withCredentials: true });
  }

  createSubscription(subscription: any): Observable<ISubscription> {
    return this.http.post<ISubscription>(this.$url, subscription, {
      withCredentials: true,
    });
  }

  editSubscription(
    id: Number,
    editedSubscribtion: ISubscription
  ): Observable<any> {
    return this.http.put(`${this.$url}/${id}`, editedSubscribtion, {
      withCredentials: true,
    });
  }
}
