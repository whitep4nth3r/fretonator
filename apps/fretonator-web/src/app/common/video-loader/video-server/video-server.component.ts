import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-server',
  templateUrl: './video-server.component.html',
  styleUrls: ['./video-server.component.scss']
})
export class VideoServerComponent implements OnInit {
  @Input() youTubeId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
