import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundIndexComponent } from './not-found-index.component';
import { Component } from '@angular/core';
import { NotFoundModule } from '../not-found.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotFoundIndexComponent', () => {
  @Component({
    selector: 'app-not-found-index-spec',
    template: `
      <app-not-found-index></app-not-found-index>
    `
  })
  class NotFoundIndexComponentSpec {
  }

  let component: NotFoundIndexComponentSpec;
  let fixture: ComponentFixture<NotFoundIndexComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundIndexComponentSpec],
      imports: [
        RouterTestingModule,
        NotFoundModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundIndexComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });
});
