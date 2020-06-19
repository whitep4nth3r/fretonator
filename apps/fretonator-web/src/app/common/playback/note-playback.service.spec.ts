import { TestBed } from '@angular/core/testing';

import { NotePlaybackService } from './note-playback.service';

describe('NotePlaybackService', () => {
  let service: NotePlaybackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotePlaybackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
