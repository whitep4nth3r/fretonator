import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnIndexComponent } from './learn-index/learn-index.component';
import { FretboardModule } from '../../common/fretonator/fretboard/fretboard.module';

@NgModule({
  declarations: [LearnIndexComponent],
  imports: [CommonModule, LearnRoutingModule, FretboardModule],
  exports: [LearnIndexComponent],
})
export class LearnModule {}
