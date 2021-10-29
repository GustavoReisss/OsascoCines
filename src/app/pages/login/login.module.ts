import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { LoginTemplateComponent } from 'src/app/shared/templates/login-template/login-template.component';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LogintemplateModule } from 'src/app/shared/templates/login-template/login-template.module';

const routes: Routes = [
  {
    path: "",
    component: LoginTemplateComponent,
    children: [
      { 
        path: "", 
        redirectTo: "entrar", 
        pathMatch: "full" 
      },
      { 
        path: "entrar", 
        component: LoginComponent 
      },
      { 
        path: "cadastrar", 
        component: CadastroComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LogintemplateModule,
    MatButtonModule
  ]
})
export class LoginModule { }
