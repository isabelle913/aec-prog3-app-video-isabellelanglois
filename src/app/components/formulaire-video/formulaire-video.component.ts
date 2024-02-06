import { Component } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';
import { AUTEURS } from 'src/app/mocks/mock-auteurs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

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
    id: '0',
    nom: '',
    description: '',
    media: '',
    code: '',
    categories: [],
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
    { value: 'st', viewValue: 'Sous-titres' },
    { value: 'cc', viewValue: 'Sous-titrage pour sourds et malentendants' },
  ];

  // slider
  // prettier-ignore
  formatLabel(value: number): string {
    const min = Math.floor(value / 60);
    const sec = value - min * 60 === 0 ? '00' : value - min * 60 < 10 ? `0${value - min * 60}` : value - min * 60;
    // console.log('Value: ', value, 'min: ', min, 'sec: ', sec);
    this.dureeString = `${min}:${sec}`;
    return this.dureeString;
  }

  // date picker
  minDate: Date;

  constructor() {
    // date picker
    this.minDate = new Date();
    // Chip autocomplete
    this.filtrer(); // Filtre au mounted
  }

  //chip autocmplete
  categoriesListe: string[] = [
    'Voyager',
    'Québec',
    'Apprendre',
    'Programmation',
    'JavaScript',
    'Photographie',
    'Chevaux',
    'Règne animal',
    'Angular',
    'Photoshop',
    'Cinéma',
  ];
  categoriesFiltrees: string[] = this.categoriesListe;
  categoriesChoisis: string[] = []; // affiché dans les chips

  categorie_input: string = '';

  remove(index: number) {
    this.newVideo.categories.splice(index, 1);
  }
  ajouter(event: MatAutocompleteSelectedEvent) {
    if (!this.newVideo.categories.includes(event.option.viewValue)) {
      this.newVideo.categories.push(event.option.viewValue);
      this.categorie_input = '';
    }
  }
  filtrer() {
    this.categoriesFiltrees = this.categoriesFiltrees.filter((categorie) =>
      categorie.toLowerCase().includes(this.categorie_input)
    );
  }

  // submit
  newVideoSubmit() {
    console.log(this.newVideo);
  }
}
