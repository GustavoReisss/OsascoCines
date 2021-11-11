import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log("LoginGuard")

    return this.verificarAcesso();
  }

  private verificarAcesso(): boolean {
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login'])

    return false;
  }
  
}
