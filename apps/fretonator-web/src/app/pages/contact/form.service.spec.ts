import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';
import { HttpClientModule } from '@angular/common/http';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FormService],
    });
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
