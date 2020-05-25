import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundIndexComponent } from './not-found-index/not-found-index.component';
import { LogoWithTextComponent } from '../../common/logo-with-text/logo-with-text.component';
import { LogoWithTextModule } from '../../common/logo-with-text/logo-with-text.module';

@NgModule({
  declarations: [NotFoundIndexComponent],
  imports: [
    CommonModule,
    LogoWithTextModule,
    NotFoundRoutingModule
  ],
  exports: [
    NotFoundIndexComponent,
    LogoWithTextComponent
  ]
})
export class NotFoundModule {
}
