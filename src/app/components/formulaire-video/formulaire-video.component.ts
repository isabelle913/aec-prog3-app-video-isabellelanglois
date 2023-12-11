import { Component, inject } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';
import { AUTEURS } from 'src/app/mocks/mock-auteurs';
import { LiveAnnouncer } from '@angular/cdk/a11y';

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
    nbVues: 0,
    score: 0,
    subtitle: '',
    avis: [],
  };
  dureeString: string = '0';

  announcer = inject(LiveAnnouncer);

  // chip
  remove(category: string): void {
    const index = this.newVideo.categories.indexOf(category);

    if (index >= 0) {
      this.newVideo.categories.splice(index, 1);

      this.announcer.announce(`Removed ${category}`);
    }
  }

  // submit
  newVideoSubmit() {
    console.log(this.newVideo);
  }

  // slider
  formatLabel(value: number): string {
    const min = Math.floor(value / 60);
    const sec =
      value - min * 60 === 0
        ? '00'
        : value - min * 60 < 10
        ? `0${value - min * 60}`
        : value - min * 60;

    console.log('Value: ', value, 'min: ', min, 'sec: ', sec);

    this.dureeString = `${min}:${sec}`;

    return this.dureeString;
  }
}
