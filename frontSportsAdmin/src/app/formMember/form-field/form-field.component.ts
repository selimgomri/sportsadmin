import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  constructor(private fb: FormBuilder) { }

  fieldForm = this.fb.group({
    label: ['', Validators.required],
    type: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.fieldForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  updateProfile() {
    this.fieldForm.patchValue({
      label: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.fieldForm.value);
  }

}
