import { TestBed } from '@angular/core/testing';
import { GetJamTrackPipe } from './get-jam-track.pipe';
import { GenerateFretMapService } from 'src/app/common/generate-fret-map/generate-fret-map.service';
import { Mode } from '../../../util/types';

describe('GetJamTrackPipe', () => {
  let service: GenerateFretMapService;
  let pipe: GetJamTrackPipe;

  beforeEach(() => {
    service = TestBed.inject(GenerateFretMapService);
    pipe = new GetJamTrackPipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('calls GenerateFretMapService.getJamTrack', () => {
    const spy = spyOn(pipe.generateFretMapService, 'getJamTrack');

    const note = {
      name: 'c',
      flat: false,
      sharp: false,
      doubleFlat: false,
      doubleSharp: false,
    };

    pipe.transform(note, 'ionian' as Mode);
    expect(spy).toHaveBeenCalledWith(note, 'ionian');
  });
});
