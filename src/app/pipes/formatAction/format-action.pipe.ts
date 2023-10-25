import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAction',
})
export class FormatActionPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value === 1) return `${value} Ação`;
    else if (value > 1) return `${value} Ações`;

    return '';
  }
}
