import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaseTemplateComponent } from 'src/app/shared/templates/base-template/base-template.component';
import { BaseTemplateModule } from 'src/app/shared/templates/base-template/base-template.module';

const routes: Routes = [
  {
    path: "",
    component: BaseTemplateComponent,
    loadChildren: () => import("./all-movies/all-movies.module").then(m => m.AllMoviesModule)
  },
  {
    path: "playing-movies",
    component: BaseTemplateComponent,
    loadChildren: () => import("./playing-movies/playing-movies.module").then(m => m.PlayingMoviesModule)
  },
  {
    path: "movie",
    component: BaseTemplateComponent,
    loadChildren: () => import("./movie-session/movie-session.module").then(m => m.MovieSessionModule)
  },
  {
    path: "teste-generos",
    component: BaseTemplateComponent,
    loadChildren: () => import("./genre-movies-page/genre-movies-page.module").then(m => m.GenreMoviesPageModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BaseTemplateModule
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesModule { }
