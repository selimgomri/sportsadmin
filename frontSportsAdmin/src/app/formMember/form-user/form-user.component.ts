import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {


  constructor(private fb: FormBuilder) { }

member = new FormControl('');
member2 = new FormControl('');

updateMember() {
  this.member2.setValue(this.member.value);
};




}
