import { Component, Input } from '@angular/core';
import { ChordMap, FretMap, Mode, ModeMap } from '../../util/types';
import { GlobalService } from '../../global.service';

enum ScaleDegreesToggleText {
  hidden = 'About scale degrees',
  visible = 'Hide scale degrees info'
}

enum TheoreticalScalesToggleText {
  hidden = 'About theoretical scales',
  visible = 'Hide theoretical info'
}

@Component({
  selector: 'app-fretonator',
  templateUrl: './fretonator.component.html',
  styleUrls: ['./fretonator.component.scss']
})
export class FretonatorComponent {
  @Input() fretMap: FretMap;
  @Input() modeMap: ModeMap;
  @Input() intervalMap: [];
  @Input() chordMap: ChordMap;
  @Input() mode: Mode;
  @Input() modeDisplayString: string;
  @Input() note: string;
  @Input() noteExtenderString: string;
  @Input() noteExtender: string;
  showScaleMapInfo = false;
  scaleDegreesToggleText = ScaleDegreesToggleText.hidden;
  showTheoreticalScalesInfo = false;
  theoreticalScalesToggleText = TheoreticalScalesToggleText.hidden;

  constructor(private globalService: GlobalService) {
  }

  toggleScaleMapInfo() {
    this.showScaleMapInfo = !this.showScaleMapInfo;
    this.scaleDegreesToggleText = this.showScaleMapInfo ? ScaleDegreesToggleText.visible : ScaleDegreesToggleText.hidden;
  }

  toggleTheoreticalScaleInfo() {
    this.showTheoreticalScalesInfo = !this.showTheoreticalScalesInfo;
    this.theoreticalScalesToggleText = this.showTheoreticalScalesInfo ? TheoreticalScalesToggleText.visible : TheoreticalScalesToggleText.hidden;
  }

  enharmonicLinkClick() {
    this.toggleTheoreticalScaleInfo();
    this.globalService.getScrollTarget().scrollIntoView();
  }
}
