import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.scss']
})
export class AboutIndexComponent implements OnInit {
  pageDescription = 'Thanks for checking out the Fretonator! I’m a qualified music teacher that (somehow) ended up working as a lead software engineer (it’s a long story), and I built this for my husband.';
  pageTitle = 'About the Fretonator - the ultimate interactive free guitar theory tool';
  pageUrl = 'https://www.fretonator.com/about';

  constructor(private title: Title, private meta: Meta) {
  }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({
      name: 'description',
      content: this.pageDescription
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.pageUrl
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: this.pageDescription
    });

    this.meta.updateTag({
      property: 'og:description',
      content: this.pageDescription
    });

    this.meta.updateTag({
      property: 'og:title',
      content: this.pageTitle
    });
  }
}
