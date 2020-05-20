import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { GetNoteFromFretMapPipe } from './get-note-from-fret-map.pipe';
import { GetScaleDegreeFromFretMapPipe } from './get-scale-degree-from-fret-map.pipe';

@NgModule({
  declarations: [FretonatorComponent, GetNoteFromFretMapPipe, GetScaleDegreeFromFretMapPipe],
  imports: [CommonModule],
  exports: [FretonatorComponent],
})
export class FretonatorModule {}
