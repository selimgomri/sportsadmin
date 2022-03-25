import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, Form } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent {

  myForm: FormGroup;
  constructor(private fb:FormBuilder, private modalService: NgbModal) {
    this.myForm = this.fb.group({
      name: '',
      fields: this.fb.array([]) ,
    });

  }

  fields() : FormArray {
    return this.myForm.get("fields") as FormArray
  }

  newfield(): FormGroup {
    return this.fb.group({
      name: ''
    })
  }

  addfield() {
    this.fields().push(this.newfield());
  }

  removefield(i:number) {
    this.fields().removeAt(i);
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  closeResult = '';

  openLg(content:any) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
}
