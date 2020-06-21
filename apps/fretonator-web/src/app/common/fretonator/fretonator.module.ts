import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { ChordMapModule } from './chord-map/chord-map.module';
import { IntervalMapModule } from './interval-map/interval-map.module';
import { ScaleMapModule } from './scale-map/scale-map.module';
import { IsTheoreticalScalePipe } from './is-theoretical-scale.pipe';
import { SimilarModesModule } from './similar-modes/similar-modes.module';
import { GetSimilarModesPipe } from './get-similar-modes.pipe';
import { VideoLoaderModule } from '../video-loader/video-loader.module';
import { SymbolToNoteObjPipe } from './symbol-to-note-obj.pipe';
import { GetJamTrackPipe } from './get-jam-track.pipe';
import { FretboardModule } from './fretboard/fretboard.module';

@NgModule({
  declarations: [
    FretonatorComponent,
    IsTheoreticalScalePipe,
    GetSimilarModesPipe,
    SymbolToNoteObjPipe,
    GetJamTrackPipe,
  ],
  imports: [
    CommonModule,
    ChordMapModule,
    IntervalMapModule,
    ScaleMapModule,
    SimilarModesModule,
    VideoLoaderModule,
    FretboardModule
  ],
  exports: [
    FretonatorComponent
  ]
})
export class FretonatorModule {
}
