import { AddParenthesisPipe } from './add-parenthesis.pipe';

describe('AddParenthesisPipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new AddParenthesisPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns a string with parenthesis', () => {
    expect(pipe.transform('G')).toBe('(G)');
  });

  it('returns a blank string for a blank string', () => {
    expect(pipe.transform('')).toBe('');
  })
});
