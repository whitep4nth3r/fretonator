import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutIndexComponent } from './about-index/about-index.component';

@NgModule({
  declarations: [AboutIndexComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [AboutIndexComponent],
})
export class AboutModule {}
