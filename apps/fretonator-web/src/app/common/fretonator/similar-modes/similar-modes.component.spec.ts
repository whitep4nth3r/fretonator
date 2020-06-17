import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarModesComponent } from './similar-modes.component';
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
  class SimilarModesComponentSpec {
  }

  let component: SimilarModesComponentSpec;
  let fixture: ComponentFixture<SimilarModesComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarModesComponentSpec],
      imports: [ SimilarModesModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarModesComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
