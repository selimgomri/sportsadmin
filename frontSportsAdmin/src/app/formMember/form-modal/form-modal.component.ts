import { Component, ViewChild } from '@angular/core';
import { Field } from './field';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent {
  buttonAddCliked = false;
  supplyFields: Field = new Field();
  typeField = ['text', 'select', 'number', 'date'];
  optionName:string = '';
  optionSelect: string[] = [];

  @ViewChild("addField") addField!: NgForm;

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
    console.log(form)
    this.submitted = true;
    console.log(this.supplyFields);
    console.log(this.optionSelect);
    form.resetForm();
    this.optionName='';
    this.optionSelect=[];

  }

  onSubmit2(form: NgForm, formOption: NgModel) {
    this.submitted = true;
    console.log(this.supplyFields);
    console.log(this.optionSelect);
    this.supplyFields.optionOfSelect =[];
    this.optionName='';
    this.optionSelect=[];
    formOption.reset();
    form.resetForm();
  }


  addOption(formOption: NgModel) {
    console.log(this.optionName);


    if (this.optionName != '') {
      this.buttonAddCliked = true;

      this.optionSelect.push(this.optionName);
      this.supplyFields.optionOfSelect = this.optionSelect
      this.optionName ='';

    }
  }

  /*removefield(i: number) {
    this.fields().removeAt(i);
  }*/
}
