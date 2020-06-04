import { GetChordMapPipe } from './get-chord-map.pipe';
import { FretMapService } from '../../../common/fret-map/fret-map.service';
import { TestBed } from '@angular/core/testing';
import { Mode } from '../../../util/types';

describe('GetChordMapPipe', () => {
  let service: FretMapService;
  let pipe: GetChordMapPipe;

  beforeEach(() => {
    service = TestBed.inject(FretMapService);
    pipe = new GetChordMapPipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('calls GenerateFretMapService.getChords', () => {
    const spy = spyOn(pipe.generateFretMapService, 'getChordMap');

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
