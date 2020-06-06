import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnIndexComponent } from './learn-index/learn-index.component';
import { StripeBannerModule } from '../../common/stripe-banner/stripe-banner.module';


@NgModule({
  declarations: [LearnIndexComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
    StripeBannerModule,
  ],
  exports: [LearnIndexComponent],
})
export class LearnModule { }
