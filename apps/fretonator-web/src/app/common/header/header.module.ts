import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LogoWithTextModule } from '../svgs/logo-with-text/logo-with-text.module';
import { LogoNoTextModule } from '../svgs/logo-no-text/logo-no-text.module';
import { MoonModule } from '../svgs/moon/moon.module';
import { SunModule } from '../svgs/sun/sun.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    LogoWithTextModule,
    LogoNoTextModule,
    MoonModule,
    SunModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
