import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TheaterSessionsComponent } from './theater-sessions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/theaters',
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: TheaterSessionsComponent
  }
]

@NgModule({
  declarations: [
    TheaterSessionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TheaterSessionsModule { }
