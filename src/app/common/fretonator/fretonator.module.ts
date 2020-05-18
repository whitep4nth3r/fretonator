import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { GetNoteFromFretMapPipe } from './get-note-from-fret-map.pipe';

@NgModule({
  declarations: [FretonatorComponent, GetNoteFromFretMapPipe],
  imports: [CommonModule],
  exports: [FretonatorComponent],
})
export class FretonatorModule {}
