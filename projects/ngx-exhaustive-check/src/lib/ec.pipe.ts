import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ec',
  standalone: true,
  pure: true,
})
export class EcPipe implements PipeTransform {
  transform(value: never): never;
  transform<T, const U1>(
    value: TypeEqual<T, U1> extends true ? T : never,
    _expected1: U1,
  ): never;
  transform<T, const U1, const U2>(
    value: TypeEqual<T, U1 | U2> extends true ? T : never,
    _expected1: U1,
    _expected2: U2,
  ): never;
  transform<T, const U1, const U2, const U3>(
    value: TypeEqual<T, U1 | U2 | U3> extends true ? T : never,
    _expected1: U1,
    _expected2: U2,
    _expected3: U3,
  ): never;
  transform<T, const U1, const U2, const U3, const U4>(
    value: TypeEqual<T, U1 | U2 | U3 | U4> extends true ? T : never,
    _expected1: U1,
    _expected2: U2,
    _expected3: U3,
    _expected4: U4,
  ): never;
  transform<T, const U1, const U2, const U3, const U4, const U5>(
    value: TypeEqual<T, U1 | U2 | U3 | U4 | U5> extends true ? T : never,
    _expected1: U1,
    _expected2: U2,
    _expected3: U3,
    _expected4: U4,
    _expected5: U5,
  ): never;
  transform<T, const U1, const U2, const U3, const U4, const U5, const U6>(
    value: TypeEqual<T, U1 | U2 | U3 | U4 | U5 | U6> extends true ? T : never,
    _expected1: U1,
    _expected2: U2,
    _expected3: U3,
    _expected4: U4,
    _expected5: U5,
    _expected6: U6,
  ): never;
  transform<
    T,
    const U1,
    const U2,
    const U3,
    const U4,
    const U5,
    const U6,
    const U7,
  >(
    value: TypeEqual<T, U1 | U2 | U3 | U4 | U5 | U6 | U7> extends true
      ? T
      : never,
    _expected1: U1,
    _expected2: U2,
    _expected3: U3,
    _expected4: U4,
    _expected5: U5,
    _expected6: U6,
    _expected7: U7,
  ): never;
  transform<
    T,
    const U1,
    const U2,
    const U3,
    const U4,
    const U5,
    const U6,
    const U7,
    const U8,
  >(
    value: TypeEqual<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8> extends true
      ? T
      : never,
    _expected1: U1,
    _expected2: U2,
    _expected3: U3,
    _expected4: U4,
    _expected5: U5,
    _expected6: U6,
    _expected7: U7,
    _expected8: U8,
  ): never;
  transform<
    T,
    const U1,
    const U2,
    const U3,
    const U4,
    const U5,
    const U6,
    const U7,
    const U8,
    const U9,
  >(
    value: TypeEqual<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9> extends true
      ? T
      : never,
    _expected1: U1,
    _expected2: U2,
    _expected3: U3,
    _expected4: U4,
    _expected5: U5,
    _expected6: U6,
    _expected7: U7,
    _expected8: U8,
    _expected9: U9,
  ): never;
  transform<
    T,
    const U1,
    const U2,
    const U3,
    const U4,
    const U5,
    const U6,
    const U7,
    const U8,
    const U9,
    const U10,
  >(
    value: TypeEqual<
      T,
      U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10
    > extends true
      ? T
      : never,
    _expected1: U1,
    _expected2: U2,
    _expected3: U3,
    _expected4: U4,
    _expected5: U5,
    _expected6: U6,
    _expected7: U7,
    _expected8: U8,
    _expected9: U9,
    _expected10: U10,
  ): never;
  transform(value: unknown, ..._: unknown[]) {
    return value as never;
  }
}

type TypeEqual<Actual, Expect> =
  (<T>() => T extends Actual ? 1 : 2) extends <T>() => T extends Expect ? 1 : 2
    ? true
    : false;
