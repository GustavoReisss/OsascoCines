import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
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
      },
      {
        path: "user",
        loadChildren: () => import("./user/user.module").then(m => m.UserModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesModule { }
