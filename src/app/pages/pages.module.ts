import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaseTemplateComponent } from '../shared/templates/base-template/base-template.component';
import { SignComponent } from '../components/sign/sign.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { AuthService  } from "../auth.service"
import { VerifyEmailComponent } from '../components/verify-email/verify-email.component';
import { AuthGuard } from "../shared/guard/auth.guard";
import { HomeComponent } from '../components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {path:'home', component: BaseTemplateComponent,loadChildren: () => import("src/app/components/home/home.module").then(m => m.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class PagesModule { }
