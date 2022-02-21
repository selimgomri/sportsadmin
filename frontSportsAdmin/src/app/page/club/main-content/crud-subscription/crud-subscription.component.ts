import { SubscriptionService } from './../../../../services/subscription/subscription.service';
import { Component, OnInit } from '@angular/core';
import { ISubscription } from 'src/app/services/subscription/ISubscription';

@Component({
  selector: 'crud-subscription',
  templateUrl: './crud-subscription.component.html',
  styleUrls: ['./crud-subscription.component.scss'],
})
export class CRUDSubscriptionComponent implements OnInit {
  subscriptions!: [ISubscription];

  constructor(private subscriptionService: SubscriptionService) {}
  ngOnInit(): void {
    this.subscriptionService.getSubscriptions().subscribe((datas: any) => {
      this.subscriptions = datas['hydra:member'];
      console.log(this.subscriptions);

    /*   this.subscriptions.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.retail_price });
      }); */
    });
  }
}
