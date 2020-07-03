import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretboardConfigComponent } from './fretboard-config.component';



@NgModule({
  declarations: [FretboardConfigComponent],
  exports: [
    FretboardConfigComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FretboardConfigModule { }
