import { Component, HostListener, Input } from '@angular/core';
import { JamTrack } from '../../util/types';

@Component({
  selector: 'app-video-loader',
  templateUrl: './video-loader.component.html',
  styleUrls: ['./video-loader.component.scss']
})
export class VideoLoaderComponent {
  @Input() jamTrack: JamTrack;
  showVideo = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showVideo = true;
  }
}
