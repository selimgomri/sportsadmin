import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from './Login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  model : Login = new Login();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // form submitted
    console.log(this.model);
 }

}
