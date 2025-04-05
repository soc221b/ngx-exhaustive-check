import { ExhaustiveCheckPipe } from './exhaustive-check.pipe';
import { expectTypeOf } from 'expect-type';

describe('ExhaustiveCheckPipe', () => {
  it('creates an instance', () => {
    const pipe = new ExhaustiveCheckPipe();
    expect(pipe).toBeTruthy();
  });

  it('works with never', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = undefined as never;

    const result = pipe.transform(value);

    expect(result).toBe(value);
    expectTypeOf(result).toEqualTypeOf<typeof value>();
  });

  it('works with undefined', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = undefined;

    const result = pipe.transform(value, [undefined]);

    expect(result).toBe(value);
    expectTypeOf(result).toEqualTypeOf<typeof value>();
  });

  it('works with null', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = null;

    const result = pipe.transform(value, [null]);

    expect(result).toBe(value);
    expectTypeOf(result).toEqualTypeOf<typeof value>();
  });

  it('works with unions', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = undefined as undefined | null;

    const result = pipe.transform(value, [undefined, null]);

    expect(result).toBe(value);
    expectTypeOf(result).toEqualTypeOf<typeof value>();
  });

  it('works with readonly', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = undefined;

    const result = pipe.transform(value, [undefined] as readonly [undefined]);

    expect(result).toBe(value);
    expectTypeOf(result).toEqualTypeOf<typeof value>();
  });

  it('should do exhaustive check', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = undefined;

    const result = pipe.transform(
      // @ts-expect-error
      value,
    );

    expect(result).toBe(value);
  });

  it('should do exhaustive check with readonly', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = undefined as undefined | null;

    const result = pipe.transform(
      // @ts-expect-error
      value,
      [undefined] as readonly [undefined],
    );

    expect(result).toBe(value);
    expectTypeOf(result).toEqualTypeOf<typeof value>();
  });

  it('should fail when parameters are missing', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = undefined as undefined | null;

    const result = pipe.transform(
      // @ts-expect-error
      value,
      [undefined],
    );

    expect(result).toBe(value);
  });

  it('should fail when parameters are invalid', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = undefined as undefined | null;

    const result = pipe.transform(
      value,
      // @ts-expect-error
      undefined,
    );

    expect(result).toBe(value);
  });

  it('should fail when satisfies are excessive', () => {
    const pipe = new ExhaustiveCheckPipe();
    const value = undefined as undefined | null;

    const result = pipe.transform(value, [
      undefined,
      null,
      // @ts-expect-error
      0,
    ]);

    expect(result).toBe(value);
  });
});
