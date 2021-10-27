import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BaseTemplateComponent } from 'src/app/shared/templates/base-template/base-template.component';

const routes: Routes = [
  {
    path: "",
    component: BaseTemplateComponent,
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
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
