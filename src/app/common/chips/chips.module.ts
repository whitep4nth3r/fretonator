import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipsComponent} from './chips.component';
import {ChipComponent} from './chip/chip.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ChipsComponent,
    ChipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ChipComponent,
    ChipsComponent,
  ],
})
export class ChipsModule {
}
