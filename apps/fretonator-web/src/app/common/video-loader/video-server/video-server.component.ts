import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-server',
  templateUrl: './video-server.component.html',
  styleUrls: ['./video-server.component.scss']
})
export class VideoServerComponent {
  @Input() youTubeId: string;
}
