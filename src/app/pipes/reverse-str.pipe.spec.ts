import { ReverseStrPipe } from './reverse-str.pipe';

describe('ReverseStrPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseStrPipe();
    expect(pipe).toBeTruthy();
  });
});
