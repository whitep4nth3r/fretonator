import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnIndexComponent } from './learn-index.component';
import { Component } from '@angular/core';
import { LearnModule } from '../learn.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('LearnIndexComponent', () => {
  @Component({
    selector: 'app-learn-index-spec',
    template: `
      <app-learn-index></app-learn-index>
    `
  })
  class LearnIndexComponentSpec {
  }
  let component: LearnIndexComponentSpec;
  let fixture: ComponentFixture<LearnIndexComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnIndexComponentSpec ],
      imports: [
        LearnModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnIndexComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
