import { TestBed } from '@angular/core/testing';

import { RouteToModeConfigurationService } from './route-to-mode-configuration.service';

describe('RouteToNoteService', () => {
  let service: RouteToModeConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteToModeConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
