import { ISubscription } from 'src/app/services/subscription/ISubscription';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'verify-modal',
  templateUrl: './verify-modal.html',
  styleUrls: ['./verify-modal.scss'],
})
export class VerifyModal {
  @Input() subscription!: ISubscription;
  @Output() removeClick: EventEmitter<ISubscription> = new EventEmitter();

  closeResult = '';

  constructor(private modalService: NgbModal) {}

  /* openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  } */

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

  remove() {
    this.removeClick.emit(this.subscription);
  }
}
