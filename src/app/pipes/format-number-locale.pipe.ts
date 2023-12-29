import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumberLocale',
})
export class FormatNumberLocalePipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) return '';
    return value.toLocaleString();
  }
}
