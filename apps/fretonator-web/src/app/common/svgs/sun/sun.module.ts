import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunComponent } from './sun.component';


@NgModule({
  declarations: [SunComponent],
  exports: [
    SunComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SunModule { }
