import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordMapComponent } from './chord-map.component';


@NgModule({
  declarations: [ChordMapComponent],
  exports: [
    ChordMapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChordMapModule { }
