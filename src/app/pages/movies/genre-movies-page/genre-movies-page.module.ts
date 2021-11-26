import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from 'src/app/shared/components/components.module';

import { GenreMoviesPageComponent } from './genre-movies-page.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { GenreNotFoundComponent } from './components/genre-not-found/genre-not-found.component';
import { NgxSpinnerModule } from "ngx-spinner";
const routes: Routes = [
  {
    path: "",
    component: GenreMoviesPageComponent
  }
]

@NgModule({
  declarations: [
    GenreMoviesPageComponent,
    GenreNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    DirectivesModule,
    NgxSpinnerModule
  ],
  exports: [
    RouterModule
  ]
})
export class GenreMoviesPageModule { }
