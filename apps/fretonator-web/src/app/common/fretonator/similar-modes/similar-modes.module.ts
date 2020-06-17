import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimilarModesComponent } from './similar-modes.component';
import { ChipsModule } from '../../chips/chips.module';


@NgModule({
  declarations: [SimilarModesComponent],
  exports: [
    SimilarModesComponent
  ],
  imports: [
    CommonModule,
    ChipsModule
  ]
})
export class SimilarModesModule { }
