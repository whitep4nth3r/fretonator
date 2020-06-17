import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSuccessComponent } from './contact-success.component';

describe('ContactSuccessComponent', () => {
  let component: ContactSuccessComponent;
  let fixture: ComponentFixture<ContactSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
