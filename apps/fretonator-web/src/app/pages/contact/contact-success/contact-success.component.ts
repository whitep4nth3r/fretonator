import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact-success.component.html',
  styleUrls: ['./contact-success.component.scss']
})
export class ContactSuccessComponent implements AfterViewInit {
  @ViewChild('scrollTarget') scrollTarget: ElementRef<HTMLElement>;

  constructor(private globalService: GlobalService) {
  }

  ngAfterViewInit(): void {
    this.globalService.setScrollTarget(this.scrollTarget.nativeElement);
  }

  onClick() {
    this.globalService.getScrollTarget().scrollIntoView();
  }
}
