import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleMapComponent } from './scale-map.component';
import { DisplayScaleDegreesPipe } from './display-scale-degrees.pipe';
import { GetEnharmonicEquivalentPipe } from './get-enharmonic-equivalent.pipe';
import { RouterModule } from '@angular/router';
import { GetEnharmonicRouterLinkPipe } from './get-enharmonic-router-link.pipe';
import { CrossModule } from '../../svgs/cross/cross.module';
import { PlayModule } from '../../svgs/play/play.module';


@NgModule({
  declarations: [ScaleMapComponent, DisplayScaleDegreesPipe, GetEnharmonicEquivalentPipe, GetEnharmonicRouterLinkPipe],
  exports: [
    ScaleMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CrossModule,
    PlayModule
  ]
})
export class ScaleMapModule { }
