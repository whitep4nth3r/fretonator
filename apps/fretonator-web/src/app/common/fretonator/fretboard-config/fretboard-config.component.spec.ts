import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FretboardConfigComponent } from './fretboard-config.component';
import { Component } from '@angular/core';
import { FretboardConfigModule } from './fretboard-config.module';

describe('FretboardConfigComponent', () => {
  @Component({
    selector: 'app-fretboard-config-spec',
    template: `
      <app-fretboard-config></app-fretboard-config>
    `
  })
  class FretboardConfigComponentSpec {
  }

  let component: FretboardConfigComponentSpec;
  let fixture: ComponentFixture<FretboardConfigComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretboardConfigComponentSpec ],
      imports: [FretboardConfigModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretboardConfigComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
