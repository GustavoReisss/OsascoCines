import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaseTemplateComponent } from 'src/app/shared/templates/base-template/base-template.component';

const routes: Routes = [
  {
    path: "",
    component: BaseTemplateComponent,
    loadChildren: () => import("./all-movies/all-movies.module").then(m => m.AllMoviesModule)
  },
  {
    path: "movie",
    component: BaseTemplateComponent,
    loadChildren: () => import("./movie-session/movie-session.module").then(m => m.MovieSessionModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesModule { }
