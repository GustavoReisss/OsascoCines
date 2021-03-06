import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';

import { DirectivesModule } from 'src/app/shared/directives/directives.module';

import { MovieSessionComponent } from './movie-session.component';
import { TheaterSessionsComponent } from './components/theater-sessions/theater-sessions.component';
import { MovieBannerComponent } from './components/movie-banner/movie-banner.component';

const routes: Routes = [
  {
    path: ":id",
    component: MovieSessionComponent 
  }
]

@NgModule({
  declarations: [
    MovieSessionComponent,
    TheaterSessionsComponent,
    MovieBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    DirectivesModule
  ]
})
export class MovieSessionModule { }
