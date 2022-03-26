import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
  class LearnIndexSpecComponent {
  }
  let component: LearnIndexSpecComponent;
  let fixture: ComponentFixture<LearnIndexSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnIndexSpecComponent ],
      imports: [
        LearnModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnIndexSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
