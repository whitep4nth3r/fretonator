import { ConvertIntervalIntegerToStringPipe } from './convert-interval-integer-to-string.pipe';

describe('ConvertIntervalIntegerToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertIntervalIntegerToStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns "semitone" for 1', () => {
    const pipe = new ConvertIntervalIntegerToStringPipe();
    const result = pipe.transform(1);
    expect(result).toBe('semitone');
  });

  it('returns "tone" for 2', () => {
    const pipe = new ConvertIntervalIntegerToStringPipe();
    const result = pipe.transform(2);
    expect(result).toBe('tone');
  });

  it('returns "aug 2nd" for 3', () => {
    const pipe = new ConvertIntervalIntegerToStringPipe();
    const result = pipe.transform(3);
    expect(result).toBe('aug 2nd');
  });
});
