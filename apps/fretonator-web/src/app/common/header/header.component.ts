import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractDataService } from '../abstract-data/abstract-data.service';

const StorageKeys = {
  darkColorMode: 'fretonator_darkColorMode',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() setDarkColorMode = new EventEmitter<any>();
  isMenuVisible = false;
  darkColorMode = true;

  constructor(private localStorage: AbstractDataService) {
  }

  ngOnInit(): void {
    const _darkColorMode = this.localStorage.getItem(StorageKeys.darkColorMode);
    switch (_darkColorMode) {
      case false:
        this.darkColorMode = false;
        break;
      case true:
        this.darkColorMode = true;
        break;
      default:
        this.darkColorMode = true;
    }

    this.setDarkColorMode.emit(this.darkColorMode);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleTheme() {
    this.darkColorMode = !this.darkColorMode;
    this.setDarkColorMode.emit(this.darkColorMode);
    this.localStorage.setItem(StorageKeys.darkColorMode, this.darkColorMode);
  }
}
