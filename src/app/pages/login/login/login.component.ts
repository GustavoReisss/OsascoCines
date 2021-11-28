import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.navigateToDefaultRoute();
    }
  }

  entrarComGoogle() {
    this.authService.GoogleAuth();
  }

  navigateToDefaultRoute(): void {
    this.router.navigate(['home']);
  }
}
