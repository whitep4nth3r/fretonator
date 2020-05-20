import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-video-loader',
  templateUrl: './video-loader.component.html',
  styleUrls: ['./video-loader.component.scss']
})
export class VideoLoaderComponent implements OnInit {
  @Input() youTubeId: string;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId) { }

  ngOnInit(): void {
    this.isBrowser = !isPlatformBrowser(this.platformId)
  }

}
