import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LogoWithTextModule } from '../logo-with-text/logo-with-text.module';
import { LogoWithTextComponent } from '../logo-with-text/logo-with-text.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    LogoWithTextModule,
  ],
  exports: [
    HeaderComponent,
    LogoWithTextComponent
  ]
})
export class HeaderModule {
}
