import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';

import { MovieSessionComponent } from './movie-session.component';

const routes: Routes = [
  {
    path: ":id",
    component: MovieSessionComponent 
  }
]

@NgModule({
  declarations: [
    MovieSessionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ]
})
export class MovieSessionModule { }
