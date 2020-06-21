import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../common/meta/meta.service';

@Component({
  selector: 'app-learn-index',
  templateUrl: './learn-index.component.html',
  styleUrls: ['./learn-index.component.scss']
})
export class LearnIndexComponent implements OnInit {
  pageDescription = 'Welcome to the Fretonator learning hub, where you can learn music theory tailored to the guitar, guitar techniques and essential maintenance skills.';
  pageTitle = 'Learn guitar theory with the Fretonator - the ultimate interactive free guitar theory tool';
  pageUrl = 'https://www.fretonator.com/learn';

  constructor(private metaService: MetaService) {
  }

  ngOnInit(): void {
    this.metaService.updateAllGenericMeta(this.pageUrl, this.pageTitle, this.pageDescription);
  }
}
