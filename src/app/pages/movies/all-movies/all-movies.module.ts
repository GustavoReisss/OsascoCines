import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AllMoviesComponent } from './all-movies.component';

const routes: Routes = [
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
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AllMoviesModule { }
