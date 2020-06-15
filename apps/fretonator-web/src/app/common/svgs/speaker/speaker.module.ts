import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerComponent } from './speaker.component';


@NgModule({
  declarations: [SpeakerComponent],
  exports: [
    SpeakerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpeakerModule { }
