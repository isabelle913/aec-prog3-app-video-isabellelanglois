import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuree',
})
export class FormatDureePipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    const formattedHours = String(hours);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    if (hours === 0) return `${minutes}:${formattedSeconds}`;
    else return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
