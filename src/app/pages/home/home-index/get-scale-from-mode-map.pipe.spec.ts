import { TestBed } from '@angular/core/testing';
import { GetScaleFromModeMapPipe } from './get-scale-from-mode-map.pipe';
import { GenerateFretMapService } from 'src/app/common/generate-fret-map/generate-fret-map.service';
import { Mode } from '../../../util/types';

const cNoteObj = {
  name: 'c',
  flat: false,
  sharp: false,
  doubleFlat: false,
  doubleSharp: false,
};
describe('GetScaleFromModeMapPipe', () => {
  let service: GenerateFretMapService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateFretMapService);
  });

  it('create an instance', () => {
    const pipe = new GetScaleFromModeMapPipe(service);
    expect(pipe).toBeTruthy();
  });

  it('returns the C major scale', () => {
    const pipe = new GetScaleFromModeMapPipe(service);
    const result = pipe.transform(cNoteObj, Mode.ionian);
    expect(result).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
  });
});
