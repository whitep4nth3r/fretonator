import { TestBed } from '@angular/core/testing';

import { GenerateModeMapPipe } from './generate-mode-map.pipe';
import { Mode } from '../../../util/types';
import { FretMapService } from '../../../common/fret-map/fret-map.service';

describe('GenerateModeMapPipe', () => {
  let pipe: GenerateModeMapPipe;

  beforeEach(() => {
    const service = TestBed.inject(FretMapService);
    pipe = new GenerateModeMapPipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  it('calls GenerateFretMapService.generateMode', () => {
    const spy = spyOn(pipe.generateFretMapService, 'generateMode');

    const note = {
      name: 'c',
      flat: false,
      sharp: false,
      doubleFlat: false,
      doubleSharp: false
    };

    pipe.transform(note, 'ionian' as Mode);
    expect(spy).toHaveBeenCalledWith(note, 'ionian');
  });
});
