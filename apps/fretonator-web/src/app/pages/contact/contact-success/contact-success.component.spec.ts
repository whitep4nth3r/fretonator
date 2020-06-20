import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSuccessComponent } from './contact-success.component';
import { Component } from '@angular/core';
import { ContactModule } from '../contact.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

describe('ContactSuccessComponent', () => {
  @Component({
    selector: 'app-contact-success-spec',
    template: `
      <app-contact-success></app-contact-success>
    `
  })
  class ContactSuccessComponentSpec {
  }

  let component: ContactSuccessComponentSpec;
  let fixture: ComponentFixture<ContactSuccessComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSuccessComponentSpec],
      imports: [
        ContactModule,
        RouterTestingModule,
        CommonModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSuccessComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
