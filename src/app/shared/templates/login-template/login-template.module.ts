import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

import { DirectivesModule } from '../../directives/directives.module';

import { LoginTemplateComponent } from './login-template.component';

@NgModule({
  declarations: [
    LoginTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    DirectivesModule
  ],
  exports: [
    LoginTemplateComponent,
  ]
})
export class LogintemplateModule { }
