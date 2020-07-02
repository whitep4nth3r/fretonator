import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColorModes } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleColorMode = new EventEmitter<any>();
  isMenuVisible = false;
  darkColorMode = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleTheme() {
    this.darkColorMode = !this.darkColorMode;
    this.toggleColorMode.emit();
  }
}
