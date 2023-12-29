import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../interfaces/ivideo';

@Pipe({
  name: 'filterScore',
})
export class FilterScorePipe implements PipeTransform {
  transform(
    values: IVideo[],
    min: number = -999999999,
    max: number = 999999999
  ): IVideo[] {
    return values.filter((value) => value.score >= min && value.score <= max);
  }
}
