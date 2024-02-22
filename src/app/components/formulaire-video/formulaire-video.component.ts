import { Component, Inject, OnInit } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';
import { AUTEURS } from 'src/app/mocks/mock-auteurs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { NgForm } from '@angular/forms';
import { VideoService } from 'src/app/services/video/video.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// select
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
  video: IVideo = {
    id: 0,
    nom: '',
    description: '',
    media: '', // https://picsum.photos/id/237/200/300
    code: '',
    categories: [],
    auteur: AUTEURS[0],
    date_publication: '',
    duree: 1,
    nb_vues: 0,
    score: 0,
    subtitle: '',
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
    this.dureeString = `${min}:${sec}`;
    return this.dureeString;
  }

  // date picker
  minDate: Date;

  // TODO remplacer par le mock
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

  constructor(
    private videoService: VideoService,
    private dialogRef: MatDialogRef<FormulaireVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVideo
  ) {
    // date picker
    this.minDate = new Date();
    // Chip autocomplete
    this.filtrer(); // Filtre au mounted

    if (data) {
      this.video = data;
    }
  }

  //// vieux TODO est-ce que doit garder
  remove(index: number) {
    this.video.categories.splice(index, 1);
  }
  ajouter(event: MatAutocompleteSelectedEvent) {
    if (!this.video.categories.includes(event.option.viewValue)) {
      this.video.categories.push(event.option.viewValue);
      this.categorie_input = '';
    }
  }
  filtrer() {
    this.categoriesFiltrees = this.categoriesFiltrees.filter((categorie) =>
      categorie.toLowerCase().includes(this.categorie_input)
    );
  }

  ///// nouveau

  formatDate(dateEntered: string) {
    const date = new Date(dateEntered);
    const annee = date.getFullYear();
    const mois = date.getMonth() + 1;
    const jour = date.getDate();
    const dateFormated = `${annee}-${mois}-${jour}`;

    this.video.date_publication = dateFormated;
  }

  addVideo(videoForm: NgForm) {
    this.formatDate(this.video.date_publication);
    if (videoForm.valid) {
      this.videoService.addVideo(this.video).subscribe((_) => {
        videoForm.resetForm();
        this.dialogRef.close('Vidéo ajouté!');
      });
    }
  }
  updateVideo(videoForm: NgForm) {
    this.formatDate(this.video.date_publication);
    if (videoForm.valid) {
      this.videoService.updateVideo(this.video).subscribe((_) => {
        videoForm.resetForm();
        this.dialogRef.close('Vidéo modifié!');
      });
    }
  }
  annuler() {
    this.dialogRef.close();
  }
}
