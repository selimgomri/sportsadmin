import { Component, ViewChild, Input } from '@angular/core';
import { Field } from '../field';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent {
  @Input() supplyFields: Field = new Field();
  buttonRemoveClicked = false;
  buttonAddClicked = false;
  typeField = ['text', 'select', 'number', 'date'];
  optionName: string = '';
  optionSelect: string[] = [];
  require: string = '';

  @ViewChild('addField') addField!: NgForm;

  constructor(private modalService: NgbModal) {}

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
  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(this.supplyFields);
    form.resetForm();
    this.optionName = '';
    this.optionSelect = [];
  }

  onSubmit2(form: NgForm, formOption: NgModel) {
    this.submitted = true;
    console.log(this.supplyFields);
    this.supplyFields.optionOfSelect = [];
    this.optionName = '';
    this.optionSelect = [];
    formOption.reset();
    form.resetForm();
  }

  addOption() {
    if (this.optionName !== '') {
      this.buttonAddClicked = true;
      this.optionSelect.push(this.optionName);
      this.supplyFields.optionOfSelect = this.optionSelect;
      this.optionName = '';
    }
  }

  removeOption(index: number) {
    this.buttonRemoveClicked = true;
    this.buttonAddClicked = false;
    this.optionSelect.length -= 1;
    this.optionSelect.splice(index, 0);
  }
}
