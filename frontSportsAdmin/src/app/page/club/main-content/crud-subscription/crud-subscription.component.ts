import { ISubscription } from './../../../../services/subscription/ISubscription';
import { SubscriptionService } from './../../../../services/subscription/subscription.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud-subscription',
  templateUrl: './crud-subscription.component.html',
  styleUrls: ['./crud-subscription.component.scss'],
})
export class CRUDSubscriptionComponent implements OnInit {
  subscriptions!: ISubscription[];

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.subscriptionService.getSubscriptions().subscribe((datas: any) => {
      this.subscriptions = datas['hydra:member'];
    });
  }

  onRemoveClick(subscription: any) {
    console.log(subscription);
    if (!subscription) return;
    this.subscriptionService
      .deleteSubscription(subscription.id)
      .subscribe(() => {
        if (!subscription) return;
        this.subscriptions = this.subscriptions.filter((deleted) => {
          return deleted.id !== subscription.id;
        });
      });
  }
}
