import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginTemplateComponent } from 'src/app/shared/templates/login-template/login-template.component';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LogintemplateModule } from 'src/app/shared/templates/login-template/login-template.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NgxLoadingModule } from 'ngx-loading';
const routes: Routes = [
  {
    path: "",
    component: LoginTemplateComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      },
      {
        path: "cadastrar",
        component: CadastroComponent
      },
      {
        path: "verificar-email",
        component: VerifyEmailComponent
      },
      {
        path: "esqueci-a-senha",
        component: ForgotPasswordComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LogintemplateModule,
    NgxLoadingModule
  ]
})
export class LoginModule { }
