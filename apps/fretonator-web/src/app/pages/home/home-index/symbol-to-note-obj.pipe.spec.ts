import { SymbolToNoteObjPipe } from './symbol-to-note-obj.pipe';
import { FretMapService } from '../../../common/fret-map/fret-map.service';
import { TestBed } from '@angular/core/testing';

describe('SymbolToNoteObjPipe', () => {
  let service: FretMapService;
  let pipe: SymbolToNoteObjPipe;

  beforeEach(() => {
    service = TestBed.inject(FretMapService);
    pipe = new SymbolToNoteObjPipe(service);
  });

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('calls FretMapService.convertSymbolToNoteObject', () => {
    const spy = jest.spyOn(pipe.fretMapService, 'convertSymbolToNoteObject');

    pipe.transform('d', '_');
    expect(spy).toHaveBeenCalledWith('d', '_');
  });
});
