import {TestBed} from '@angular/core/testing';

import {GenerateFretMapPipe} from './generate-fret-map.pipe';
import {Mode} from '../../../util/types';
import {GenerateFretMapService} from '../../../common/generate-fret-map/generate-fret-map.service';

describe('GenerateFretMapPipe', () => {

  let pipe: GenerateFretMapPipe;

  beforeEach(() => {
    const service = TestBed.inject(GenerateFretMapService);
    pipe = new GenerateFretMapPipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('calls GenerateFretMapService.getFretMapping', () => {
    const spy = spyOn(pipe.generateFretMapService, 'getFretMapping');

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
