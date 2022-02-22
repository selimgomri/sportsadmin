import { Router } from '@angular/router';
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

  constructor(
    private subscriptionService: SubscriptionService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.subscriptionService.getSubscriptions().subscribe((datas: any) => {
      this.subscriptions = datas['hydra:member'];
      console.log(this.subscriptions);
    });
  }

  onRemoveClick(subscription: any) {
    if (!subscription) return;
    //console.log(subscription);
    this.subscriptionService
      .deleteSubscription(subscription.id)
      .subscribe(() => {
        if (!subscription) return;
        this.subscriptions = this.subscriptions.filter((deleted) => {
          console.log(deleted.id);
          console.log('separation');
          return deleted.id !== subscription.id;
        }); //subscription.id != deleted);
        //console.log(this.subscriptions);
        //this.route.navigate(['/gestion-des-cotisations']);
      });
  }
}
