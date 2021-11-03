import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BgBlurDirective } from './bg-blur.directive';


@NgModule({
  declarations: [
    BgBlurDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BgBlurDirective
  ]
})
export class DirectivesModule { }
