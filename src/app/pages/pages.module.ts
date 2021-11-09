import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../shared/guards/login.guard';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule) 
  },
  {
    path: "",
    // canActivate: [LoginGuard],
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path: "movies",
        loadChildren: () => import("./movies/movies.module").then(m => m.MoviesModule)
      },
      {
        path: "theaters",
        loadChildren: () => import("./theaters/theaters.module").then(m => m.TheatersModule)
      }
    ]
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
