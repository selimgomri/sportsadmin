import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from './Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  model : Login = new Login();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
    this.router.navigate(['/mes-clubs']);
 }

}
