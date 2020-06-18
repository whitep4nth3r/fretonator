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
import { GetSimilarModesPipe } from './get-similar-modes.pipe';
import { VideoLoaderModule } from '../video-loader/video-loader.module';
import { SymbolToNoteObjPipe } from './symbol-to-note-obj.pipe';
import { GetJamTrackPipe } from './get-jam-track.pipe';

@NgModule({
  declarations: [
    FretonatorComponent,
    GetFretFromFretMapPipe,
    IsTheoreticalScalePipe,
    GetSimilarModesPipe,
    SymbolToNoteObjPipe,
    GetJamTrackPipe
  ],
  imports: [
    CommonModule,
    ChordMapModule,
    IntervalMapModule,
    ScaleMapModule,
    SpeakerModule,
    SimilarModesModule,
    VideoLoaderModule
  ],
  exports: [
    FretonatorComponent
  ]
})
export class FretonatorModule {
}
