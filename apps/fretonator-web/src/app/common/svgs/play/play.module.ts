import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';



@NgModule({
  declarations: [PlayComponent],
  exports: [
    PlayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlayModule { }
