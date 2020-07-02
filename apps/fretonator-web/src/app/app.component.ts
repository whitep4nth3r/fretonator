import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalService } from './global.service';

export const ColorModes = {
  light: 'light',
  dark: 'dark'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('globalScrollTarget') globalScrollTarget: ElementRef<HTMLElement>;
  colorMode = ColorModes.dark;

  constructor(private globalService: GlobalService) {
  }

  ngAfterViewInit() {
    this.globalService.setGlobalScrollTarget(this.globalScrollTarget.nativeElement);
  }

  toggleColorMode() {
    if (this.colorMode === ColorModes.dark) {
      this.colorMode = ColorModes.light;
    } else {
      this.colorMode = ColorModes.dark;
    }
  }
}
