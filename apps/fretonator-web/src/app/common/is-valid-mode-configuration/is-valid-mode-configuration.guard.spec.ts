import { TestBed } from '@angular/core/testing';

import { IsValidModeConfigurationGuard } from './is-valid-mode-configuration.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('IsValidModeConfigurationGuard', () => {
  let guard: IsValidModeConfigurationGuard;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({}),
              snapshot: {
                data: {
                  selected: { note: 'c', noteExtender: 'natural', mode: 'ionian' }
                }
              }
            }

          }]
      }
    );
    guard = TestBed.inject(IsValidModeConfigurationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
