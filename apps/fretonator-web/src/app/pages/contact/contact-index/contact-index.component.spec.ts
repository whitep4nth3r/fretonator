import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIndexComponent } from './contact-index.component';

describe('ContactIndexComponent', () => {
  let component: ContactIndexComponent;
  let fixture: ComponentFixture<ContactIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
