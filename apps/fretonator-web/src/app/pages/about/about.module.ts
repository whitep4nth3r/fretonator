import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutIndexComponent } from './about-index/about-index.component';
import { StripeBannerModule } from '../../common/stripe-banner/stripe-banner.module';

@NgModule({
  declarations: [AboutIndexComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    StripeBannerModule
  ],
  exports: [AboutIndexComponent]
})
export class AboutModule {
}
