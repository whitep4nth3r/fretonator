import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrossComponent } from './cross.component';


@NgModule({
  declarations: [CrossComponent],
  exports: [
    CrossComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrossModule {
}
