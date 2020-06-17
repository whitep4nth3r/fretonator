import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LogoWithTextModule } from '../svgs/logo-with-text/logo-with-text.module';
import { LogoWithTextComponent } from '../svgs/logo-with-text/logo-with-text.component';
import { LogoNoTextModule } from '../svgs/logo-no-text/logo-no-text.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    LogoWithTextModule,
    LogoNoTextModule
  ],
  exports: [
    HeaderComponent,
    LogoWithTextComponent
  ]
})
export class HeaderModule {
}
