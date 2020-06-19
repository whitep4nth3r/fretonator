import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNoTextComponent } from './logo-no-text.component';


@NgModule({
  declarations: [LogoNoTextComponent],
  exports: [
    LogoNoTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LogoNoTextModule {
}
