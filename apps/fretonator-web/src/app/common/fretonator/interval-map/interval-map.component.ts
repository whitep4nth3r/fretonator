import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interval-map',
  templateUrl: './interval-map.component.html',
  styleUrls: ['./interval-map.component.scss']
})
export class IntervalMapComponent {
  @Input() intervalMap: [];
}
