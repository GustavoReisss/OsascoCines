import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';

import { MatIconModule } from '@angular/material/icon'

import { BaseTemplateComponent } from './base-template.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    BaseTemplateComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    BaseTemplateComponent,
  ]

})
export class BaseTemplateModule { }
