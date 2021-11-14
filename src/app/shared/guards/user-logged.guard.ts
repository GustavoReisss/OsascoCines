import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService  
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedIn == true){
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
  
}
