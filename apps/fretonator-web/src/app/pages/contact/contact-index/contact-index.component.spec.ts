import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactModule } from '../contact.module';

describe('ContactIndexComponent', () => {
  @Component({
    selector: 'app-contact-index-spec',
    template: `
      <app-contact-index></app-contact-index>
    `
  })
  class ContactIndexSpecComponent {
  }

  let component: ContactIndexSpecComponent;
  let fixture: ComponentFixture<ContactIndexSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactIndexSpecComponent],
      imports: [
        ContactModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIndexSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
