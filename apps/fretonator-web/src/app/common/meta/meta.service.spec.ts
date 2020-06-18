import { TestBed } from '@angular/core/testing';
import { MetaService } from './meta.service';
import { FretMapService } from '../fret-map/fret-map.service';

describe('MetaService', () => {
  let fretMapService: FretMapService;
  let metaService: MetaService;

  beforeEach(() => {
    fretMapService = TestBed.inject(FretMapService);
    metaService = new MetaService(fretMapService);
  });

  it('should be created', () => {
    expect(metaService).toBeTruthy();
  });

  it('should return the base title', () => {
    const result = metaService.getBaseTitle();
    expect(result).toBe('Fretonator - the ultimate interactive free guitar theory tool');
  });

  it('should return a generic end description', () => {
    const result = metaService.getGenericEndDescription();
    expect(result).toBe('Choose a starting note, pick a mode, check out the fretboard and have a jam!');
  });

  it('should return a home page url from given parameters', () => {
    const result = metaService.generateHomePageUrl('c', 'natural', 'lydian');
    expect(result).toBe('https://www.fretonator.com/c/natural/lydian');
  });

  it('should call the fret map service for the title and return the correct string', () => {
    const result = metaService.generateHomePageTitle('c', 'natural', 'lydian');
    expect(result).toBe('Fretonator - the ultimate interactive free guitar theory tool | C Lydian');
  });

  it('should call the fret map service for the description and return the correct string', () => {
    const result = metaService.generateHomePageMetaDescription('c', 'natural', 'lydian');
    expect(result).toBe('Learn the C Lydian mode on the guitar and play along to a jam track with the Fretonator. Choose a starting note, pick a mode, check out the fretboard and have a jam!');
  });
});
