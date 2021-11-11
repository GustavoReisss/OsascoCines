import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { BaseTemplateModule } from 'src/app/shared/templates/base-template/base-template.module';

import { BaseTemplateComponent } from 'src/app/shared/templates/base-template/base-template.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "",
    component: BaseTemplateComponent,
    children: [
      { path: "", component: HomeComponent }
    ] 
  }
]

@NgModule({
  declarations: [
  HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BaseTemplateModule,
    DirectivesModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
