import { SubscriptionService } from './../../../../services/subscription/subscription.service';
import { Component, Input, OnInit } from '@angular/core';
import { ISubscription } from './../../../../services/subscription/ISubscription';

@Component({
  selector: 'crud-subscription',
  templateUrl: './crud-subscription.component.html',
  styleUrls: ['./crud-subscription.component.scss'],
})
export class CRUDSubscriptionComponent implements OnInit {
  @Input() newSubscription: any;
  subscriptions!: ISubscription[];

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.getSubscriptions();
  }

  getSubscriptions() {
    return this.subscriptionService
      .getSubscriptions()
      .subscribe((datas: any) => {
        this.subscriptions = datas['hydra:member'];
      });
  }

  onRemoveClick(subscription: any) {
    if (!subscription) return;
    this.subscriptionService
      .deleteSubscription(subscription.id)
      .subscribe(() => {
        if (!subscription) return;
        this.subscriptions = this.subscriptions.filter((toDelete) => {
          return toDelete.id !== subscription.id;
        });
      });
  }
  addSubscription(newSubscription: any) {
    this.subscriptions.push(newSubscription);
    this.getSubscriptions();
  }
}
