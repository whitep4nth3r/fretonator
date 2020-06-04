import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalMapComponent } from './interval-map.component';
import { ConvertIntervalIntegerToStringPipe } from './convert-interval-integer-to-string.pipe';


@NgModule({
  declarations: [
    IntervalMapComponent,
    ConvertIntervalIntegerToStringPipe
  ],
  exports: [
    IntervalMapComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class IntervalMapModule {
}
