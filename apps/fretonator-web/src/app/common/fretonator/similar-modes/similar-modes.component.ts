import { Component, Input, OnInit } from '@angular/core';
import { Mode, ModeMap, SimilarModes } from '../../../util/types';
import { FretMapService } from '../../fret-map/fret-map.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-similar-modes',
  templateUrl: './similar-modes.component.html',
  styleUrls: ['./similar-modes.component.scss']
})
export class SimilarModesComponent implements OnInit {
  @Input() modeMap: ModeMap;
  @Input() mode: Mode;
  @Input() modeDisplayString: string;
  similarModes: SimilarModes = [];

  constructor(private activatedRoute: ActivatedRoute,
              public fretMapService: FretMapService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => this.onRouteChange());
    this.getSimilarModes();
  }

  onRouteChange() {
    this.getSimilarModes();
  }

  getSimilarModes() {
    this.similarModes = this.fretMapService.getSimilarModes(this.modeMap, this.mode);
  }
}
