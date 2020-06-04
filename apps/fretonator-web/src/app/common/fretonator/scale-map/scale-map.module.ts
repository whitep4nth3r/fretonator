import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleMapComponent } from './scale-map.component';
import { DisplayScaleDegreesPipe } from './display-scale-degrees.pipe';



@NgModule({
  declarations: [ScaleMapComponent, DisplayScaleDegreesPipe],
  exports: [
    ScaleMapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScaleMapModule { }
