import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusOnRouterDirective } from './focus-on-router.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FocusOnRouterDirective],
  imports: [CommonModule, RouterModule],
  exports: [FocusOnRouterDirective],
})
export class FocusOnRouterModule {}
