import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Edit } from './Edit';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.scss']
})
export class EditClubComponent implements OnInit {

  model : Edit = new Edit();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
    this.router.navigate(['/editer-mon-club']);
  }

}
