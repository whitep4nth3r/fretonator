import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-video-browser',
  templateUrl: './video-browser.component.html',
  styleUrls: ['./video-browser.component.scss'],
})
export class VideoBrowserComponent {
  @Input() youTubeId: string;
  @Input() title: string;
}
