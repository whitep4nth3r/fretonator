import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('globalScrollTarget') globalScrollTarget: ElementRef<HTMLElement>;

  constructor(private globalService: GlobalService) {
  }

  ngAfterViewInit() {
    this.globalService.setGlobalScrollTarget(this.globalScrollTarget.nativeElement);
  }
}
