import { Component, OnInit } from '@angular/core';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';
import { IUser } from 'src/app/IUser';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ViewComponent implements OnInit {

  user?: IUser;

  constructor(
    private sessionLoginService: SessionLoginService,
    config: NgbModalConfig,
    private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  }

  ngOnInit(): void {
    this.sessionLoginService.userProfile.subscribe((data) => {
      this.user = data;
    });
  }

}
