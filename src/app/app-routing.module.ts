import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { UserLoggedGuard } from './shared/guards/user-logged.guard';

import { NotFoundComponent } from './shared/components/not-found/not-found.component'; 

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  },
  {
    path: "login",
    loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule) 
  },
  { path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
