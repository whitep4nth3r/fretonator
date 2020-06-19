import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips.component';
import { ChipComponent } from './chip/chip.component';
import { RouterModule } from '@angular/router';
import { CreateChipLinkTitlePipe } from './chip/create-chip-link-title.pipe';

@NgModule({
  declarations: [
    ChipsComponent,
    ChipComponent,
    CreateChipLinkTitlePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ChipComponent,
    ChipsComponent
  ]
})
export class ChipsModule {
}
