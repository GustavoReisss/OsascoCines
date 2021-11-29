import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BaseTemplateModule } from 'src/app/shared/templates/base-template/base-template.module';
import { BaseTemplateComponent } from 'src/app/shared/templates/base-template/base-template.component';


const routes: Routes = [
  {
    path: '',
    component: BaseTemplateComponent,
    loadChildren: () => import("./all-theaters/all-theaters.module").then(m => m.AllTheatersModule)
  },
  {
    path: 'theater',
    component: BaseTemplateComponent,
    loadChildren: () => import("./theater-page/theater-page.module").then(m => m.TheaterPageModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BaseTemplateModule
  ],
  exports: [
    RouterModule
  ]
})
export class TheatersModule { }
