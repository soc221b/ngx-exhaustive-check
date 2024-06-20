import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ec',
  standalone: true,
  pure: true,
})
export class EcPipe implements PipeTransform {
  transform<T, U = never>(
    value: T extends U ? (U extends T ? T : never) : never,
    _expected: U = undefined as U,
  ): never {
    return value as never;
  }
}
