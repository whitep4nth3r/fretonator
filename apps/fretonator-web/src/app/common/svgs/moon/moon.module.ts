import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoonComponent } from './moon.component';



@NgModule({
  declarations: [MoonComponent],
  exports: [
    MoonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoonModule { }
