import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordMapComponent } from './chord-map.component';
import { AddParenthesisPipe } from './add-parenthesis.pipe';


@NgModule({
  declarations: [ChordMapComponent, AddParenthesisPipe],
  exports: [
    ChordMapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChordMapModule {
}
