import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { AllMoviesComponent } from './all-movies.component';

const routes = [
  {
    path: "",
    component: AllMoviesComponent
  }
]

@NgModule({
  declarations: [
    AllMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AllMoviesModule { }
