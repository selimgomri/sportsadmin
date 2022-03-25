import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionLoginService } from '../services/session-login/session-login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private service: SessionLoginService, private route: Router) {}
  canActivate() {
    if (this.service.me()) {
      return true;
    } else {
      this.route.navigate(['']);
      return false;
    }
  }
}
