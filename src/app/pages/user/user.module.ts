import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseTemplateComponent } from 'src/app/shared/templates/base-template/base-template.component';

const routes: Route[] = [
  {
    path: "",
    component: BaseTemplateComponent,
    children: [
      { path: "", redirectTo: "perfil", pathMatch: "full" },
      { path: "perfil", component: DashboardComponent }
    ]
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
