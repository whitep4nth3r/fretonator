import { TestBed } from '@angular/core/testing';
import { CreateChipLinkTitlePipe } from './create-chip-link-title.pipe';
import { GenerateFretMapService } from '../../../common/generate-fret-map/generate-fret-map.service';
import { NoteExtenderString, Mode } from '../../../util/types';

describe('CreateChipLinkTitlePipe', () => {
  let service: GenerateFretMapService;
  let pipe: CreateChipLinkTitlePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateFretMapService);
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
