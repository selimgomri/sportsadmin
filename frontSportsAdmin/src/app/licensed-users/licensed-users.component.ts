import {
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { IUser } from '../IUser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { DecimalPipe } from '@angular/common';

export type SortColumn = keyof IUser | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdSortableHeader {
  user!: IUser;
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}
@Component({
  selector: 'app-licensed-users',
  templateUrl: './licensed-users.component.html',
  styleUrls: ['./licensed-users.component.scss'],
  providers: [DecimalPipe],
})
export class LicensedUsersComponent {
  licensedUsers: IUser[] = [];
  sortedUsers = this.licensedUsers;
  page = 1;
  pageSize = 5;
  closeResult = '';
  id!: number;
  form!: FormGroup;

  @Output() length = new EventEmitter<number>();

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  test?: any;

  constructor(
    private apiService: UsersService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.apiService.getLicensedUsers().subscribe((datas: any) => {
      this.licensedUsers = datas['hydra:member'];
      this.sortedUsers = this.licensedUsers;
      this.length.emit(this.licensedUsers.length);
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
      licenseNumber: new FormControl(''),
    });
  }

  filterName(term: any) {
    this.apiService.getLicensedFilteredUsers(term).subscribe((datas: any) => {
      this.licensedUsers = datas['hydra:member'];
      this.sortedUsers = this.licensedUsers;
      console.log('datas',datas['hydra:member']);
      this.length.emit(this.licensedUsers.length);
    });
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting members
    if (direction === '' || column === '') {
      this.sortedUsers = this.licensedUsers;
    } else {
      this.sortedUsers = [...this.licensedUsers].sort((a: any, b: any) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  delete(id: number) {
    this.apiService.deleteUser(id).subscribe((res) => {
      this.sortedUsers = this.sortedUsers.filter((item) => item.id !== id);
      console.log('Post deleted successfully!');
    });
  }

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

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
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

  /*  submit() {
    this.apiService.getUsersFiltered('').subscribe((datas: any) => {
      this.licensedUsers = datas['hydra:member'].filter((user: any) => user.licenseNumber != null);
    });
  } */
}
