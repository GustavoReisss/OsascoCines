import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaseTemplateComponent } from '../shared/templates/base-template/base-template.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: BaseTemplateComponent,
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "movies",
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
export class PagesModule { }
