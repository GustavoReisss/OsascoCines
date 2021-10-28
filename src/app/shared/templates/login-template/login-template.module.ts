import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginTemplateComponent } from './login-template.component';



@NgModule({
  declarations: [
    LoginTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginTemplateComponent,
  ]
})
export class LogintemplateModule { }
