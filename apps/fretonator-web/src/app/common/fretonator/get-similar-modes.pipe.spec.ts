import { GetSimilarModesPipe } from './get-similar-modes.pipe';
import { TestBed } from '@angular/core/testing';
import { FretMapService } from '../fret-map/fret-map.service';
import { Mode } from '../../util/types';
import { cIonianMode } from '../fret-map/fret-map.service.testConstants';

describe('GetSimilarModesPipe', () => {

  let pipe: GetSimilarModesPipe;

  beforeEach(() => {
    const service = TestBed.inject(FretMapService);
    pipe = new GetSimilarModesPipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  it('calls GenerateFretMapService.getSimilarModes', () => {
    const spy = jest.spyOn(pipe.generateFretMapService, 'getSimilarModes');

    pipe.transform(cIonianMode, 'ionian' as Mode);
    expect(spy).toHaveBeenCalledWith(cIonianMode, 'ionian');
  });
});
