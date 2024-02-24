import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatVisionnement',
})
export class FormatVisionnementPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0 && value < 1000) return `${value}`;

    if (value >= 1000 && value <= 1000000) {
      return Math.floor(value / 1000) + 'K';
    }

    if (value > 1000000) {
      return Math.floor(value / 1000000) + 'M';
    } else return '';
  }
}
