import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { SimilarModesModule } from './similar-modes.module';

describe('SimilarModesComponent', () => {

  @Component({
    selector: 'app-similar-modes-spec',
    template: `
      <app-similar-modes [similarModes]="[]">
      </app-similar-modes>
    `
  })
  class SimilarModesSpecComponent {
  }

  let component: SimilarModesSpecComponent;
  let fixture: ComponentFixture<SimilarModesSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarModesSpecComponent],
      imports: [SimilarModesModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarModesSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
