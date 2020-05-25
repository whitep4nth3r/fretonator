import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.scss']
})
export class AboutIndexComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
  }

  ngOnInit(): void {
    this.title.setTitle('About the Fretonator - the ultimate interactive free guitar theory tool');
    this.meta.updateTag({
      name: 'description',
      content: "Thanks for checking out the Fretonator! I’m a qualified music teacher that (somehow) ended up working as a lead software engineer (it’s a long story), and I built this for my husband."
    });
  }
}
