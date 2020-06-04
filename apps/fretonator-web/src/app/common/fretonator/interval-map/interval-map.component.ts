import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval-map',
  templateUrl: './interval-map.component.html',
  styleUrls: ['./interval-map.component.scss']
})
export class IntervalMapComponent implements OnInit {
  @Input() intervalMap: [];
  constructor() { }

  ngOnInit(): void {
  }

}
