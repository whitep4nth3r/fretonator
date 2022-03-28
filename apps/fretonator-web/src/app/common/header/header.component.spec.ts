import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { Component, DebugElement } from '@angular/core';
import { HeaderModule } from './header.module';

describe('HeaderComponent', () => {

  const selectors = {
    logo: By.css('.header__siteLogo'),
    links: By.css('.header__linksItemLink'),
    hamburger: By.css(`.hamburger`),
    menu: By.css('.header__links'),
    themeToggleButton: By.css('.theme__toggle')
  };

  const classNames = {
    menuHide: 'header__links--hide',
    isDark: 'isDark',
    isLight: 'isLight'
  };

  @Component({
    selector: 'app-header-spec',
    template: `
      <app-header></app-header>
    `
  })
  class HeaderSpecComponent {
  }

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSpecComponent],
      imports: [RouterTestingModule, HeaderModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('Logo', () => {
    it('should have a link to the home page on the logo', () => {
      const logoElem = fixture.debugElement.query(selectors.logo);
      expect(logoElem.attributes['href']).toBe('/');
    });
  });

  describe('Links', () => {

    let home: DebugElement;
    let learn: DebugElement;

    beforeEach(() => {
      const links = fixture.debugElement.queryAll(selectors.links);
      home = links[0];
      learn = links[1];
    });

    it('Home should link to /', () => {
      expect(home.attributes['href']).toBe('/');
    });

    it('Learn should link to /learn', () => {
      expect(learn.attributes['href']).toBe('/learn');
    });
  });

  describe('toggleMenu()', () => {
    let hamburger: DebugElement;
    let menu: DebugElement;

    beforeEach(() => {
      hamburger = fixture.debugElement.query(selectors.hamburger);
      menu = fixture.debugElement.query(selectors.menu);
      hamburger.nativeElement.click();
      fixture.detectChanges();
    });

    it('removes the hidden links modifier', () => {
      expect(menu.classes[classNames.menuHide]).toBeFalsy();
    });
  });

  describe('toggleTheme()', () => {
    let themeToggleButton: DebugElement;

    beforeEach(() => {
      themeToggleButton = fixture.debugElement.query(selectors.themeToggleButton);
      fixture.detectChanges();
    });

    it('has the dark class by default', () => {
      expect(themeToggleButton.classes[classNames.isDark]).toBeTruthy();
    })

    it('switches the class to isLight when clicked', () => {
      themeToggleButton.nativeElement.click();
      fixture.detectChanges();
      expect(themeToggleButton.classes[classNames.isLight]).toBeTruthy();
    })
  });
});
