import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exhaustiveCheck',
  standalone: true,
  pure: true,
})
export class ExhaustiveCheckPipe implements PipeTransform {
  transform<T, const U extends readonly any[] = never[]>(
    value: TypeEqual<T, U[number]> extends true ? T : U[number],
    satisfies: TypeEqual<T, U[number]> extends true
      ? U
      : Extract<U[number], T>[],
  ): T;
  transform<T>(value: T extends never ? T : never): T;
  transform(...args: unknown[]): unknown {
    return args[0];
  }
}

type TypeEqual<Actual, Expect> =
  (<T>() => T extends Actual ? 1 : 2) extends <T>() => T extends Expect ? 1 : 2
    ? true
    : false;
