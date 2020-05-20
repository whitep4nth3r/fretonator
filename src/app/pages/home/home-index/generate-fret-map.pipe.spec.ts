import {GenerateFretMapPipe} from './generate-fret-map.pipe';
import {Mode} from '../../../util/types';
import {GenerateFretMapServiceMock} from '../../../common/generate-fret-map/generate-fret-map.service.testConstants';

describe('GenerateFretMapPipe', () => {

  it('create an instance', () => {
    const pipe = new GenerateFretMapPipe(GenerateFretMapServiceMock);
    expect(pipe).toBeTruthy();
  });

  it('calls GenerateFretMapService.getFretMapping', () => {

    const pipe = new GenerateFretMapPipe(GenerateFretMapServiceMock);
    pipe.transform({name: 'c', flat: false, sharp: false, doubleFlat: false, doubleSharp: false}, Mode.ionian);

    expect(GenerateFretMapServiceMock.getFretMapping).toHaveBeenCalled();
  });

});
