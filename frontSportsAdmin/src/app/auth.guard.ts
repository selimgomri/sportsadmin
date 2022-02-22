import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionLoginService } from './services/session-login/session-login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: SessionLoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let userInfo = this.auth.loadUserFromLocalStorage();
    if (route.data['userType'] === 'logged-in') {
      if (userInfo.id > 0) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    } else if (route.data['userType'] === 'non-logged-in') {
      if (userInfo.id === 0) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    }
    this.router.navigate(['/']);
    return false;
  }
}
