import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDelayToday',
})
// TODO ?? utilisation plurialisations dans fichier ts
export class DateDelayTodayPipe implements PipeTransform {
  transform(value: string): string {
    const now = new Date();
    const date = new Date(value);
    const day = Math.floor((now.getTime() - date.getTime()) / 86400000);

    let str = '';

    if (day < 30) {
      str = `${day} ${day === 1 ? ' jour' : ' jours'}`;
    } else {
      const year = Math.floor(day / 365);
      str = `${year}${year === 1 ? ' an' : ' ans'}`;
    }

    return str;
  }
}

// TODO est-ce que je peux utiliser int.NumberFormat ou int.DateTimeFormat dans ce projet? IL y en a un aussi pour le pluriel
