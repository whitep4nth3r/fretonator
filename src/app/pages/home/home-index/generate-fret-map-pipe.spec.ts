import { GenerateFretMapPipe } from './generate-fret-map.pipe';
import { Mode } from '../../../util/types'
import { GenerateFretMapService } from '../../../common/generate-fret-map/generate-fret-map.service'

describe('GenerateFretMapPipe', () => {
  const GenerateFretMapServiceMock: GenerateFretMapService = {
    isNatural: jest.fn(),
    isSharp: jest.fn(),
    isFlat: jest.fn(),
    isDoubleFlat: jest.fn(),
    isDoubleSharp: jest.fn(),
    generateNextNote: jest.fn(),
    generateMode: jest.fn(),
    convertNoteObjectToHumanReadable: jest.fn(),
    convertNoteToFretMapKey: jest.fn(),
    getFretMapping: jest.fn(),
    sortFretMapping: jest.fn()
   };


  it('create an instance', () => {
    const pipe = new GenerateFretMapPipe(GenerateFretMapServiceMock);
    expect(pipe).toBeTruthy();
  });

  it('calls GenerateFretMapService.getFretMapping', () => {

    const pipe = new GenerateFretMapPipe(GenerateFretMapServiceMock);
    pipe.transform({name: 'c', flat: false, sharp: false, doubleFlat: false, doubleSharp: false}, Mode.ionian)

    expect(GenerateFretMapServiceMock.getFretMapping).toHaveBeenCalled()
  }
});
