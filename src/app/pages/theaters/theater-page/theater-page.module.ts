import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { ComponentsModule } from './../../../shared/components/components.module';

import { TheaterPageComponent } from './theater-page.component';
import { TheaterDetailsComponent } from './components/theater-details/theater-details.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { TheaterPropertiesComponent } from './components/theater-details/components/theater-properties/theater-properties.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/theaters',
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: TheaterPageComponent
  }
]

@NgModule({
  declarations: [
    TheaterPageComponent,
    TheaterDetailsComponent,
    TheaterPropertiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatIconModule,
    ComponentsModule,
    DirectivesModule
  ]
})
export class TheaterPageModule { }
