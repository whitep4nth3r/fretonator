import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickComponent } from './tick.component';



@NgModule({
  declarations: [TickComponent],
  exports: [
    TickComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TickModule { }
