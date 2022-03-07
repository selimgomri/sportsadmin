import { ISubscription } from './../../../../../services/subscription/ISubscription';
import { SubscriptionService } from './../../../../../services/subscription/subscription.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-subscription',
  templateUrl: './edit-subscription.html',
  styleUrls: ['./edit-subscription.scss'],
})
export class EditSubscription {
  @Input() subscription!: ISubscription;
  @Output() editedSubscription: EventEmitter<any> = new EventEmitter();

  closeResult = '';
  newSubs!: ISubscription;

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
      console.log(this.subscription);
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
    const editedSubscription : any = {
      name: value.name,
      amount: value.amount,
      durationInMonths: value.durationInMonths,
    };
    this.subscriptionService.editSubscription(this.subscription.id, editedSubscription).subscribe();
  }

  editNew(value: any) {
    this.editedSubscription.emit(value);
  }
}
