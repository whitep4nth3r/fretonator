import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretboardComponent } from './fretboard.component';
import { GetFretFromFretMapPipe } from './get-fret-from-fret-map.pipe';
import { SpeakerModule } from '../../svgs/speaker/speaker.module';
import { ScaleDegreesModule } from '../scale-degrees/scale-degrees.module';
import { FretboardConfigModule } from '../fretboard-config/fretboard-config.module';
import { ScaleMapModule } from '../scale-map/scale-map.module';


@NgModule({
  declarations: [
    FretboardComponent,
    GetFretFromFretMapPipe,
  ],
  imports: [
    CommonModule,
    SpeakerModule,
    ScaleDegreesModule,
    FretboardConfigModule,
    ScaleMapModule
  ],
  exports: [
    FretboardComponent
  ]
})
export class FretboardModule {
}
