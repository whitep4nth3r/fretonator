import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { GetFretFromFretMapPipe } from './get-fret-from-fret-map.pipe';
import { ChordMapModule } from './chord-map/chord-map.module';
import { IntervalMapModule } from './interval-map/interval-map.module';
import { ScaleMapModule } from './scale-map/scale-map.module';
import { IsTheoreticalScalePipe } from './is-theoretical-scale.pipe';
import { SpeakerModule } from '../svgs/speaker/speaker.module';
import { SimilarModesModule } from './similar-modes/similar-modes.module';

@NgModule({
  declarations: [
    FretonatorComponent,
    GetFretFromFretMapPipe,
    IsTheoreticalScalePipe,
  ],
  imports: [
    CommonModule,
    ChordMapModule,
    IntervalMapModule,
    ScaleMapModule,
    SpeakerModule,
    SimilarModesModule
  ],
  exports: [
    FretonatorComponent
  ]
})
export class FretonatorModule {
}
