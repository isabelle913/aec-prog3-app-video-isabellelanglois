import { Component, Inject, OnInit } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';
import { AUTEURS } from 'src/app/mocks/mock-auteurs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { NgForm } from '@angular/forms';
import { VideoService } from 'src/app/services/video.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  video: IVideo = {
    id: 0,
    nom: '',
    description: '',
    media: '',
    code: '',
    categories: [],
    auteur: AUTEURS[0],
    date_publication: '2024-02-14', // TODO corriger format de date, il n'accepte pas le format reçu pat le date picker
    duree: 0,
    nb_vues: 0, // 0 en partant
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
    private _snackBar: MatSnackBar,
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

  //// vieux
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

  // submit
  videoSubmit() {
    console.log(this.video);
  }

  ///// nouveau

  addVideo(videoForm: NgForm) {
    console.log('this.video', this.video);
    console.log('videoForm', videoForm);
    if (videoForm.valid) {
      console.log('Miip');
      this.videoService.addVideo(this.video).subscribe((_) => {
        videoForm.resetForm();
        this.dialogRef.close('Vidéo ajouté!');
        // this._snackBar.open('Vidéo ajouté!', undefined, {
        //   duration: 2000,
        // });
      });
    }
  }
  updateVideo(videoForm: NgForm) {
    console.log('this.video', this.video);
    console.log('videoForm', videoForm);
    if (videoForm.valid) {
      console.log('Biip');
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

// TODO corriger les v-if des boutons et la valildation
