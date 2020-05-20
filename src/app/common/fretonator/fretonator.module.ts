import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretonatorComponent } from './fretonator.component';
import { GetFretFromFretMapPipe } from './get-fret-from-fret-map.pipe';

@NgModule({
  declarations: [
    FretonatorComponent,
    GetFretFromFretMapPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FretonatorComponent
  ],
})
export class FretonatorModule {
}
