import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Route[] = [
  {
    path: "",
    redirectTo: "perfil",
    pathMatch: "full"
  },
  {
    path: "perfil",
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
