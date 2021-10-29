import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AllTheatersComponent } from './all-theaters.component'; 

const routes: Routes = [
  {
    path: '',
    component: AllTheatersComponent
  }
]

@NgModule({
  declarations: [
    AllTheatersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AllTheatersModule { }
