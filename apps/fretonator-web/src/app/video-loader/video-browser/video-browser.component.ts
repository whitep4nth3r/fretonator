import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-browser',
  templateUrl: './video-browser.component.html',
  styleUrls: ['./video-browser.component.scss'],
})
export class VideoBrowserComponent implements OnInit {
  @Input() youTubeId: string;
  @Input() title: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
