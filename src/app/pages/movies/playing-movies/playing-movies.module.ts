import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/shared/components/components.module';

import { PlayingMoviesComponent } from './playing-movies.component';
import { NgxSpinnerModule } from "ngx-spinner";

const routes: Routes = [
  {
    path: "",
    component: PlayingMoviesComponent
  }
]

@NgModule({
  declarations: [
    PlayingMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    NgxSpinnerModule
  ]
})
export class PlayingMoviesModule { }
