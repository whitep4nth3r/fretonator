import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeBannerComponent } from './stripe-banner.component';



@NgModule({
  declarations: [StripeBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StripeBannerComponent
  ]
})
export class StripeBannerModule { }
