import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class TheaterPageModule { }
