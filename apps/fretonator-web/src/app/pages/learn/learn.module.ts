import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnIndexComponent } from './learn-index/learn-index.component';
import { StripeBannerModule } from '../../common/stripe-banner/stripe-banner.module';
import { PatternsIndexComponent } from './patterns-index/patterns-index.component';
import { FretboardModule } from '../../common/fretonator/fretboard/fretboard.module';


@NgModule({
  declarations: [
    LearnIndexComponent,
    PatternsIndexComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    StripeBannerModule,
    FretboardModule
  ],
  exports: [
    LearnIndexComponent,
    PatternsIndexComponent
  ]
})
export class LearnModule {
}
