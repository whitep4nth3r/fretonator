import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWithTextComponent } from './logo-with-text.component';

describe('LogoWithTextComponent', () => {
  let component: LogoWithTextComponent;
  let fixture: ComponentFixture<LogoWithTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoWithTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
