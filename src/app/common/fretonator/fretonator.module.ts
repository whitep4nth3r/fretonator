import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { GetNoteFromMapPipe } from './get-note-from-map.pipe';

@NgModule({
  declarations: [FretonatorComponent, GetNoteFromMapPipe],
  imports: [CommonModule],
  exports: [FretonatorComponent],
})
export class FretonatorModule {}
