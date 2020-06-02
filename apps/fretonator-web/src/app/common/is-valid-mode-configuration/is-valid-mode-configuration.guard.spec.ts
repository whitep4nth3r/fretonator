import { TestBed } from '@angular/core/testing';

import { IsValidModeConfigurationGuard } from './is-valid-mode-configuration.guard';

describe('IsValidModeConfigurationGuard', () => {
  let guard: IsValidModeConfigurationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsValidModeConfigurationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
