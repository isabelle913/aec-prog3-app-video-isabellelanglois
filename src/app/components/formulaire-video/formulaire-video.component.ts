import { Component, Inject } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';
import { AUTEURS } from 'src/app/mocks/mock-auteurs';
import { NgForm } from '@angular/forms';
import { VideoService } from 'src/app/services/video/video.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CATEGORIES } from 'src/app/mocks/mock-categories';
import { ISelect } from 'src/app/interfaces/iselect';
import { ICheckbox } from 'src/app/interfaces/icheckbox';

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
  subtitles: ISelect[] = [
    { value: 'none', viewValue: 'Aucun' },
    { value: 'st', viewValue: 'Sous-titres' },
    { value: 'cc', viewValue: 'Sous-titrage pour sourds et malentendants' },
  ];

  // Checkbox
  categoriesList: ICheckbox[] = [];

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

  constructor(
    private videoService: VideoService,
    private dialogRef: MatDialogRef<FormulaireVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVideo
  ) {
    // date picker
    this.minDate = new Date();

    if (data) {
      this.video = data;
    }
  }

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
    this.getCategoriesChecked();
    if (videoForm.valid) {
      this.videoService.addVideo(this.video).subscribe((_) => {
        videoForm.resetForm();
        this.dialogRef.close('Vidéo ajouté!');
      });
    }
  }
  updateVideo(videoForm: NgForm) {
    this.formatDate(this.video.date_publication);
    this.getCategoriesChecked();

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

  setCategoriesList() {
    const categories = [...CATEGORIES];

    this.categoriesList = categories.map((category) => {
      let checked = false;
      if (this.video.categories.includes(category)) checked = true;

      return { name: category, value: category, checked };
    });
  }
  getCategoriesChecked() {
    let response: string[] = [];

    this.categoriesList.map((category) => {
      if (category.checked) response.push(category.value);
    });
    this.video.categories = response;
  }
  ngOnInit() {
    this.setCategoriesList();
  }
  changeValue(categoryCheked: ICheckbox) {
    this.categoriesList.map((item) => {
      if (item.name === categoryCheked.name) {
        item.checked = !item.checked;
      }
    });
  }
}
