import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleMapComponent } from './scale-map.component';
import { RouterModule } from '@angular/router';
import { CrossModule } from '../../svgs/cross/cross.module';
import { PlayModule } from '../../svgs/play/play.module';
import { ScaleDegreesModule } from '../scale-degrees/scale-degrees.module';


@NgModule({
  declarations: [
    ScaleMapComponent,
  ],
  exports: [
    ScaleMapComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CrossModule,
    PlayModule,
    ScaleDegreesModule
  ]
})
export class ScaleMapModule {
}
