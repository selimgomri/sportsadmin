import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';
import { IUser } from 'src/app/IUser';
import {
  NgbModalConfig,
  NgbModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ViewComponent implements OnInit {
  @Input() user!: IUser;
  closeResult = '';

  constructor(
    private sessionLoginService: SessionLoginService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {}

  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' }).result.then(
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

  ngOnInit(): void {
    this.sessionLoginService.me().subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
}
