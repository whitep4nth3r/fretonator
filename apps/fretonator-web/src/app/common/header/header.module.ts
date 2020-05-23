import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LogoWithTextModule } from '../logo-with-text/logo-with-text.module';
import { LogoWithTextComponent } from '../logo-with-text/logo-with-text.component';
import { FocusOnRouterModule } from '../focus-on-router/focus-on-router.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    LogoWithTextModule,
    FocusOnRouterModule,
  ],
  exports: [HeaderComponent, LogoWithTextComponent],
})
export class HeaderModule {}
