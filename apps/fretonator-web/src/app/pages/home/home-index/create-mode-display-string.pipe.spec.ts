import { CreateModeDisplayStringPipe } from './create-mode-display-string.pipe';
import { TestBed } from '@angular/core/testing';
import { Mode, NoteExtenderString } from '../../../util/types';
import { FretMapService } from '../../../common/fret-map/fret-map.service';

describe('CreateModeDisplayStringPipe', () => {
  let service: FretMapService;
  let pipe: CreateModeDisplayStringPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
    pipe = new CreateModeDisplayStringPipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('calls the fret map service', () => {
    const spy = spyOn(
      pipe.fretMapService,
      'convertFretMapConfigurationToDisplayString'
    );
    pipe.transform('c', NoteExtenderString.natural, Mode.ionian);
    expect(spy).toHaveBeenCalledWith(
      'c',
      NoteExtenderString.natural,
      Mode.ionian
    );
  });
});

