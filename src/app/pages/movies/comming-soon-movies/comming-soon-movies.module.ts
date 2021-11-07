import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { CommingSoonMoviesComponent } from './comming-soon-movies.component';

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
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CommingSoonMoviesModule { }
