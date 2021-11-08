import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MovieListComponent
  ]
})
export class ComponentsModule { }
