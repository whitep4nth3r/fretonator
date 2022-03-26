import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
  class NotFoundIndexSpecComponent {
  }

  let component: NotFoundIndexSpecComponent;
  let fixture: ComponentFixture<NotFoundIndexSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundIndexSpecComponent],
      imports: [
        RouterTestingModule,
        NotFoundModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundIndexSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });
});
