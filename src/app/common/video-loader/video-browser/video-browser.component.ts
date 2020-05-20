import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-browser',
  templateUrl: './video-browser.component.html',
  styleUrls: ['./video-browser.component.scss']
})
export class VideoBrowserComponent implements OnInit {
  @Input() youTubeId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
