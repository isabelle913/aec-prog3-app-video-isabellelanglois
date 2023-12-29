import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIES } from 'src/app/mocks/mock-categories';
import { VIDEOS } from 'src/app/mocks/mock-videos';

@Component({
  selector: 'app-liste-video',
  templateUrl: './liste-video.component.html',
  styleUrls: ['./liste-video.component.css'],
})
export class ListeVideoComponent {
  videos = VIDEOS;
  categories = CATEGORIES;
  minScore = -999999999;
  maxScore = 999999999;
  categoriesSelected: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const isFavorite: boolean | null =
      this.route.snapshot.url[1] &&
      this.route.snapshot.url[1].path === 'favorite'
        ? true
        : false;

    isFavorite ? (this.minScore = 1000) : undefined;

    this.categoriesSelected = CATEGORIES;

    console.log('categoriesSelected', this.categoriesSelected);
  }

  // TODO possiblement ajouter un range pour choisir les min/max
  // TODO gérer les catégories sélectionnées
}
