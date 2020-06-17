import { Component, ElementRef, Input } from '@angular/core';
import { SimilarModes } from '../../../util/types';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-similar-modes',
  templateUrl: './similar-modes.component.html',
  styleUrls: ['./similar-modes.component.scss']
})
export class SimilarModesComponent {
  @Input() similarModes: SimilarModes;
  @Input() modeDisplayString: string;
  @Input() isTheoretical: boolean;

  constructor(private globalService: GlobalService){}

  onModeChange() {
    this.globalService.getScrollTarget().scrollIntoView();
  }
}
