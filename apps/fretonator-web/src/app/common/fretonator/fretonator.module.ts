import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { GetFretFromFretMapPipe } from './get-fret-from-fret-map.pipe';
import { ConvertIntervalIntegerToStringPipe } from './convert-interval-integer-to-string.pipe';
import { DisplayScaleDegreesPipe } from './display-scale-degrees.pipe';

@NgModule({
  declarations: [
    FretonatorComponent,
    GetFretFromFretMapPipe,
    ConvertIntervalIntegerToStringPipe,
    DisplayScaleDegreesPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FretonatorComponent
  ],
})
export class FretonatorModule {
}
