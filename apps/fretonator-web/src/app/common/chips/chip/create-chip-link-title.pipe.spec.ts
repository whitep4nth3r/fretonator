import { TestBed } from '@angular/core/testing';
import { CreateChipLinkTitlePipe } from './create-chip-link-title.pipe';
import { FretMapService } from '../../fret-map/fret-map.service';
import { Mode, NoteExtenderString } from '../../../util/types';

describe('CreateChipLinkTitlePipe', () => {
  let service: FretMapService;
  let pipe: CreateChipLinkTitlePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FretMapService);
    pipe = new CreateChipLinkTitlePipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('calls the fret map service', () => {
    const spy = spyOn(
      pipe.generateFretMapService,
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
