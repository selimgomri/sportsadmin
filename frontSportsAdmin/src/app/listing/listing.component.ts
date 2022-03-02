import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { ApiService } from '../services/session-login/api.service';
import { IUser } from '../IUser';

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

  constructor(private apiService: ApiService) {};

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((datas: any) => {
      this.users = datas['hydra:member'];
      this.sortedUsers = this.users;
      console.log(this.users);
      this.length.emit(this.users.length);
    });
  }

  delete(id:number){
    this.apiService.deleteUser(id).subscribe(res => {
         this.users = this.users.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
}
