import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent  {

  myForm: FormGroup;
  constructor(private fb:FormBuilder) {
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

}
