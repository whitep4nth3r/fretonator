import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips.component';
import { ChipComponent } from './chip/chip.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ChipsComponent,
    ChipComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ChipComponent,
    ChipsComponent,
  ],
})
export class ChipsModule {
}
