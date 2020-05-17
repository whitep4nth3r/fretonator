import { TestBed } from '@angular/core/testing';

import { GenerateFretMapService } from './generate-fret-map.service';

describe('GenerateFretMapService', () => {
  let service: GenerateFretMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateFretMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
