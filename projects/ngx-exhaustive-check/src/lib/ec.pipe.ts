import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ec',
  standalone: true,
})
export class EcPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
