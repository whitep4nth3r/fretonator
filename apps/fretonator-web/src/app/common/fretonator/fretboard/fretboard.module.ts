import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretboardComponent } from './fretboard.component';
import { GetFretFromFretMapPipe } from './get-fret-from-fret-map.pipe';
import { SpeakerModule } from '../../svgs/speaker/speaker.module';


@NgModule({
  declarations: [
    FretboardComponent,
    GetFretFromFretMapPipe
  ],
  imports: [
    CommonModule,
    SpeakerModule
  ],
  exports: [
    FretboardComponent
  ]
})
export class FretboardModule {
}
