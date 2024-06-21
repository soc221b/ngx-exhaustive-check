import { EcPipe } from './ec.pipe';

describe('EcPipe', () => {
  it('create an instance', () => {
    const pipe = new EcPipe();
    expect(pipe).toBeTruthy();
  });

  it('works with never', () => {
    const pipe = new EcPipe();
    const value = undefined as never;

    const result = pipe.transform(value);

    expect(result).toBe(value);
  });

  it('works with undefined', () => {
    const pipe = new EcPipe();
    const value = undefined;

    const result = pipe.transform(value, [undefined]);

    expect(result).toBe(value);
  });

  it('works with null', () => {
    const pipe = new EcPipe();
    const value = null;

    const result = pipe.transform(value, [null]);

    expect(result).toBe(value);
  });

  it('works with unions', () => {
    const pipe = new EcPipe();
    const value = null as undefined | null;

    const result = pipe.transform(value, [undefined, null]);

    expect(result).toBe(value);
  });

  it('should fail when parameters are missing', () => {
    const pipe = new EcPipe();
    const value = null as undefined | null;

    // @ts-expect-error
    const result = pipe.transform(value, [undefined]);

    expect(result).toBe(value);
  });
});
