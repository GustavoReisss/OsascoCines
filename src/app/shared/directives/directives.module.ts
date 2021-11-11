import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BgBlurDirective } from './bg-blur.directive';
import { NeonTextDirective } from './neon-text.directive';


@NgModule({
  declarations: [
    BgBlurDirective,
    NeonTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BgBlurDirective,
    NeonTextDirective
  ]
})
export class DirectivesModule { }
