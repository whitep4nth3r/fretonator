import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
  class ContactSuccessSpecComponent {
  }

  let component: ContactSuccessSpecComponent;
  let fixture: ComponentFixture<ContactSuccessSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSuccessSpecComponent],
      imports: [
        ContactModule,
        RouterTestingModule,
        CommonModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSuccessSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
