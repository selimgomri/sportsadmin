import { Component, OnInit } from '@angular/core';
import { Field } from './field';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  supplyFields: Field = new Field();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  closeResult = '';

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' }).result.then(
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

  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.supplyFields);
  }

  /*addfield() {
    this.supplyFields.push(this.newField);
  }

  removefield(i: number) {
    this.fields().removeAt(i);
  }*/
}
