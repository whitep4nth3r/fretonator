import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact-success.component.html',
  styleUrls: ['./contact-success.component.scss']
})
export class ContactSuccessComponent {

  constructor(private globalService: GlobalService) {
  }

  clickLink() {
    this.globalService.getScrollTarget().scrollIntoView();
  }
}
