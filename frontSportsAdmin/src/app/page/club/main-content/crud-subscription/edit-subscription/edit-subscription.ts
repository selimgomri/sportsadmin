import { SubscriptionService } from '../../../../../services/subscription/subscription.service';
import { ISubscription } from 'src/app/services/subscription/ISubscription';
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'edit-subscription',
  templateUrl: './edit-subscription.html',
  styleUrls: ['./edit-subscription.scss'],
})
export class EditSubscription {
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private subscriptionService: SubscriptionService
  ) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  /* private subscription {
    name:
    amount:
    durationInMonths:
  } */

  onSubmit(value: any) {
    console.log(value);
    const subscription: any = {
      'name': value.name,
      'amount': value.amount,
      'durationInMonths': value.durationInMonths
    };
    this.subscriptionService
      .createSubscription(subscription)
      .subscribe((z) => console.log(z));
  }
}

