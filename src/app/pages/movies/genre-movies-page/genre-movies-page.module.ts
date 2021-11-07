import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GenreMoviesPageComponent } from './genre-movies-page.component';

const routes: Routes = [
  {
    path: "",
    component: GenreMoviesPageComponent
  }
]

@NgModule({
  declarations: [
    GenreMoviesPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GenreMoviesPageModule { }
