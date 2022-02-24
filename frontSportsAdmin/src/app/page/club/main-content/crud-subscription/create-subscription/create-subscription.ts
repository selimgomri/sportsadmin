import { ISubscription } from 'src/app/services/subscription/ISubscription';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'create-subscription',
  templateUrl: './create-subscription.html',
  styleUrls: ['./create-subscription.scss'],
})
export class CreateSubscription {
  @Input() subscription!: ISubscription;
  //@Output() removeClick: EventEmitter<ISubscription> = new EventEmitter();

  closeResult = '';

  constructor(private modalService: NgbModal) {}

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

  /* remove() {
    this.removeClick.emit(this.subscription);
  } */
}
