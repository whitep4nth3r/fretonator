import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { GetFretFromFretMapPipe } from './get-fret-from-fret-map.pipe';
import { ConvertIntervalIntegerToStringPipe } from './convert-interval-integer-to-string.pipe';

@NgModule({
  declarations: [
    FretonatorComponent,
    GetFretFromFretMapPipe,
    ConvertIntervalIntegerToStringPipe,
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
