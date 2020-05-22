import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FooterComponent implements OnInit {
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
