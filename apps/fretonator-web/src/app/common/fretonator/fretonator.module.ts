import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { GetFretFromFretMapPipe } from './get-fret-from-fret-map.pipe';
import { ChordMapModule } from './chord-map/chord-map.module';
import { IntervalMapModule } from './interval-map/interval-map.module';
import { ScaleMapModule } from './scale-map/scale-map.module';

@NgModule({
  declarations: [
    FretonatorComponent,
    GetFretFromFretMapPipe,
  ],
  imports: [
    CommonModule,
    ChordMapModule,
    IntervalMapModule,
    ScaleMapModule
  ],
  exports: [
    FretonatorComponent
  ]
})
export class FretonatorModule {
}
