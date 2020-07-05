import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronRightComponent } from './chevron-right.component';



@NgModule({
  declarations: [ChevronRightComponent],
  exports: [
    ChevronRightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChevronRightModule { }
