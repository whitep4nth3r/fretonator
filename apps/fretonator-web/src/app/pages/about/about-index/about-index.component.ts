import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../common/meta/meta.service';

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.scss']
})
export class AboutIndexComponent implements OnInit {
  pageDescription = 'Thanks for checking out the Fretonator! I’m a qualified music teacher that (somehow) ended up working as a lead software engineer (it’s a long story), and I built this for my husband.';
  pageTitle = 'About the Fretonator - the ultimate interactive free guitar theory tool';
  pageUrl = 'https://www.fretonator.com/about';

  constructor(private metaService: MetaService) {
  }

  ngOnInit(): void {
    this.metaService.updateAllGenericMeta(this.pageUrl, this.pageTitle, this.pageDescription);
  }
}
