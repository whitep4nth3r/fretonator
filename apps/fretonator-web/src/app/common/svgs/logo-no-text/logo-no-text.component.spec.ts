import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNoTextComponent } from './logo-no-text.component';

describe('LogoNoTextComponent', () => {
  let component: LogoNoTextComponent;
  let fixture: ComponentFixture<LogoNoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoNoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoNoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
