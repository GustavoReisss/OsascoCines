import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';

import { ComponentsModule } from './../../../shared/components/components.module';

import { TheaterPageComponent } from './theater-page.component';
import { TheaterDetailsComponent } from './components/theater-details/theater-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/theaters',
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: TheaterPageComponent
  }
]

@NgModule({
  declarations: [
    TheaterPageComponent,
    TheaterDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    ComponentsModule
  ]
})
export class TheaterPageModule { }
