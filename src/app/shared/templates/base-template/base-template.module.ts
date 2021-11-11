import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';

import { MatIconModule } from '@angular/material/icon'
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { DirectivesModule } from '../../directives/directives.module';

import { BaseTemplateComponent } from './base-template.component';
import { NavComponent } from './components/nav/nav.component';

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
    MatListModule,
    DirectivesModule
  ],
  exports: [
    BaseTemplateComponent,
  ]

})
export class BaseTemplateModule { }
