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

  announcer = inject(LiveAnnouncer);

  remove(category: string): void {
    const index = this.newVideo.categories.indexOf(category);

    if (index >= 0) {
      this.newVideo.categories.splice(index, 1);

      this.announcer.announce(`Removed ${category}`);
    }
  }

  newVideoSubmit() {
    console.log(this.newVideo);
  }
}
