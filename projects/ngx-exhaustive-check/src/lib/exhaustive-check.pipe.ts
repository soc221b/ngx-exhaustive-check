import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exhaustiveCheck',
  standalone: true,
  pure: true,
})
export class ExhaustiveCheckPipe implements PipeTransform {
  transform<T, const U extends any[] = never[]>(
    value: TypeEqual<T, U[number]> extends true ? T : U[number],
    satisfies: U = [] as unknown as U,
  ): never {
    return value as never;
  }
}

type TypeEqual<Actual, Expect> =
  (<T>() => T extends Actual ? 1 : 2) extends <T>() => T extends Expect ? 1 : 2
    ? true
    : false;
