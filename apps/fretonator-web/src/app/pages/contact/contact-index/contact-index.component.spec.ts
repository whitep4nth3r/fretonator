import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIndexComponent } from './contact-index.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactModule } from '../contact.module';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactIndexComponent', () => {
  @Component({
    selector: 'app-contact-index-spec',
    template: `
      <app-contact-index></app-contact-index>
    `
  })
  class ContactIndexComponentSpec {
  }

  let component: ContactIndexComponentSpec;
  let fixture: ComponentFixture<ContactIndexComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactIndexComponentSpec],
      imports: [
        ContactModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIndexComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
