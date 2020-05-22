import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeIndexComponent } from './home-index.component';
import { Component } from '@angular/core';
import { HomeModule } from '../home.module';
import { Title } from '@angular/platform-browser';

describe('HomeIndexComponent', () => {

  let title: Title;

  @Component({
    selector: 'app-home-index-spec',
    template: `
      <app-home-index></app-home-index>
    `,
  })
  class HomeIndexComponentSpec {
  }

  class MockTitle {
  }

  let component: HomeIndexComponent;
  let fixture: ComponentFixture<HomeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIndexComponentSpec],
      imports: [HomeModule],
      providers: [{provide: Title, useClass: new MockTitle}],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndexComponent);
    component = fixture.componentInstance;
    title = TestBed.inject(Title);
    fixture.detectChanges();
  });

  //to do wtf
  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
