import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MetaService } from '../../../common/meta/meta.service';

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact-success.component.html',
  styleUrls: ['./contact-success.component.scss']
})
export class ContactSuccessComponent implements OnInit {
  pageDescription = 'Want to get involved? The Fretonator is open source! If you\'re a developer and you\'d like to contribute to the Fretonator, you can always fork the repository, do your magic, and send over a pull request.';
  pageTitle = 'You are amazing. Thank you for your feedback!';
  pageUrl = 'https://www.fretonator.com/contact/success';

  constructor(private metaService: MetaService) {
  }

  ngOnInit(): void {
    this.metaService.updateAllGenericMeta(this.pageUrl, this.pageTitle, this.pageDescription);
  }
}
