import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { IUser } from '../IUser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

export type SortColumn = keyof IUser | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  users: IUser[] = [];
  sortedUsers = this.users;
  page = 1;
  pageSize = 4;
  closeResult = '';
  id!: number;
  user!: IUser;
  form!: FormGroup;

  @Output() length = new EventEmitter<number>();

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {
    console.log(column);
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting members
    if (direction === '' || column === '') {
     this.sortedUsers = this.users;
    } else {
      this.sortedUsers = [...this.users].sort((a:any, b:any) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  constructor(
    private apiService: UsersService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((datas: any) => {
      this.users = datas['hydra:member'];
      this.sortedUsers = this.users;
      console.log(this.users);
      this.length.emit(this.users.length);
    });

    this.form = new FormGroup({
      //photo: new FormControl('', [Validators.required]),
      id: new FormControl(''),
      roles: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),

    });
  }

  get f(){
    return this.form.controls;
  }

  delete(id:number){
    this.apiService.deleteUser(id).subscribe(res => {
         this.users = this.users.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

  openLg(content:any) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  submit(){
    console.log(this.form.value);
    this.apiService.updateUser(this.form.value.id, this.form.value).subscribe((res:any) => {
      console.log('User updated successfully!');
      this.router.navigateByUrl('liste-membres');
    })
  }
}
