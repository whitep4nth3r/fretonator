import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnIndexComponent } from './learn-index/learn-index.component';
import { StripeBannerModule } from '../../common/stripe-banner/stripe-banner.module';
import { FretonatorModule } from '../../common/fretonator/fretonator.module';
import { PatternsIndexComponent } from './patterns-index/patterns-index.component';


@NgModule({
  declarations: [
    LearnIndexComponent,
    PatternsIndexComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    StripeBannerModule,
    FretonatorModule
  ],
  exports: [
    LearnIndexComponent,
    PatternsIndexComponent
  ]
})
export class LearnModule {
}
