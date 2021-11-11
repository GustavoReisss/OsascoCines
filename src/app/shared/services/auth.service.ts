import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { UserLogin } from './../models/interfaces/userLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(){
    this.userAuth = true;
    this.router.navigate(["/"]);
  }

  usuarioEstaAutenticado(): boolean {
    return this.userAuth;
  }
}
