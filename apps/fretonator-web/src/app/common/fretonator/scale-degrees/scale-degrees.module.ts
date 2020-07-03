import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleDegreesComponent } from './scale-degrees.component';


@NgModule({
  declarations: [ScaleDegreesComponent],
  exports: [
    ScaleDegreesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScaleDegreesModule { }
