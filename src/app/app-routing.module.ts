import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaseTemplateComponent } from '../app/shared/templates/base-template/base-template.component';
import { SignComponent } from '../app/components/sign/sign.component';
import { SignUpComponent } from '../app/components/sign-up/sign-up.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { AuthService  } from "../app/auth.service"
import { VerifyEmailComponent } from '../app/components/verify-email/verify-email.component';
import { AuthGuard } from "../app/shared/guard/auth.guard";
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {path:'home', component: BaseTemplateComponent, canActivate:[AuthGuard], loadChildren: () => import("src/app/components/home/home.module").then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule  { }
