import { Component } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';
import { AUTEURS } from 'src/app/mocks/mock-auteurs';

// aelect
interface ISubtitle {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formulaire-video',
  templateUrl: './formulaire-video.component.html',
  styleUrls: ['./formulaire-video.component.css'],
})
export class FormulaireVideoComponent {
  newVideo: IVideo = {
    nom: '',
    description: '',
    media: '',
    code: '',
    categories: ['allo', 'Coucou'],
    auteur: AUTEURS[0],
    datePublication: '',
    duree: 0,
    nbVues: 0, // 0 en partant
    score: 0, // 0 en partant
    subtitle: 'CC',
    avis: [],
  };
  dureeString: string = '0';

  // select
  subtitles: ISubtitle[] = [
    { value: 'none', viewValue: 'Aucun' },
    { value: 'ST', viewValue: 'Sous-titres' },
    { value: 'CC', viewValue: 'Sous-titrage pour sourds et malentendants' },
  ];

  // slider
  // prettier-ignore
  formatLabel(value: number): string {
    const min = Math.floor(value / 60);
    const sec = value - min * 60 === 0 ? '00' : value - min * 60 < 10 ? `0${value - min * 60}` : value - min * 60;

    console.log('Value: ', value, 'min: ', min, 'sec: ', sec);

    this.dureeString = `${min}:${sec}`;

    return this.dureeString;
  }

  // submit
  newVideoSubmit() {
    console.log(this.newVideo);
  }
}
