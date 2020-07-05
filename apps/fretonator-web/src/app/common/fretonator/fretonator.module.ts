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
import { RouterModule } from '@angular/router';
import { CrossModule } from '../svgs/cross/cross.module';
import { GetEnharmonicEquivalentPipe } from './get-enharmonic-equivalent.pipe';
import { GetEnharmonicRouterLinkPipe } from './get-enharmonic-router-link.pipe';
import { ChevronRightModule } from '../svgs/chevron-right/chevron-right.module';

@NgModule({
  declarations: [
    FretonatorComponent,
    IsTheoreticalScalePipe,
    GetSimilarModesPipe,
    SymbolToNoteObjPipe,
    GetJamTrackPipe,
    GetEnharmonicEquivalentPipe,
    GetEnharmonicRouterLinkPipe
  ],
  imports: [
    CommonModule,
    ChordMapModule,
    IntervalMapModule,
    ScaleMapModule,
    SimilarModesModule,
    VideoLoaderModule,
    FretboardModule,
    RouterModule,
    CrossModule,
    ChevronRightModule
  ],
  exports: [
    FretonatorComponent,
  ]
})
export class FretonatorModule {
}
