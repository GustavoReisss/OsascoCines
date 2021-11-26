import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { ComponentsModule } from 'src/app/shared/components/components.module';

import { CommingSoonMoviesComponent } from './comming-soon-movies.component';
import { NgxSpinnerModule } from "ngx-spinner";

const routes: Routes = [
  {
    path: '',
    component: CommingSoonMoviesComponent
  }
]

@NgModule({
  declarations: [
    CommingSoonMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    NgxSpinnerModule
  ],
  exports: [
    RouterModule
  ]
})
export class CommingSoonMoviesModule { }
