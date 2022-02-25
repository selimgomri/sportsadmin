import { SubscriptionService } from './../../../../../services/subscription/subscription.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'create-subscription',
  templateUrl: './create-subscription.html',
  styleUrls: ['./create-subscription.scss'],
})
export class CreateSubscription {
  @Input() newSubscription: any;
  @Output() addClick: EventEmitter<any> = new EventEmitter();

  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private subscriptionService: SubscriptionService
  ) {}

  openVerticallyCentered(content: any) {
    this.modalService
      .open(content, { centered: true, ariaLabelledBy: 'modal-basic-title' })
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

  onSubmit(value: any) {
    const newSubscription = {
      name: value.name,
      amount: value.amount,
      durationInMonths: value.durationInMonths,
    };
    this.subscriptionService.createSubscription(newSubscription).subscribe();
  }

  add() {
    console.log(this.newSubscription);
    this.addClick.emit(this.newSubscription);
  }
}
