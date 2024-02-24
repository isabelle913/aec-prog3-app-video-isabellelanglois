import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAuteur } from 'src/app/interfaces/iauteur';
import { IVideo } from 'src/app/interfaces/ivideo';
import { AUTEURS } from 'src/app/mocks/mock-auteurs';
import { CATEGORIES } from 'src/app/mocks/mock-categories';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-liste-video',
  templateUrl: './liste-video.component.html',
  styleUrls: ['./liste-video.component.css'],
})
export class ListeVideoComponent implements OnInit {
  videos: IVideo[] = [];
  categories = [...CATEGORIES];
  minScore = 1000;
  maxScore = 1000000;
  categoriesSelected: string[] = [];
  auteur: IAuteur = AUTEURS[0];

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  toggleCategory(category: string) {
    if (this.categoriesSelected.includes(category)) {
      const index = this.categoriesSelected.indexOf(category);
      this.categoriesSelected.splice(index, 1);
    } else {
      this.categoriesSelected.push(category);
    }
  }

  ngOnInit(): void {
    const isFavorite: boolean | null =
      this.route.snapshot.url[1] &&
      this.route.snapshot.url[1].path === 'favorite'
        ? true
        : false;

    isFavorite ? (this.minScore = 1000) : undefined;

    this.categoriesSelected = [...CATEGORIES];

    this.getVideos();
  }

  formatLabel(value: number) {
    this.minScore = value;
    return `${this.minScore}`;
  }

  getVideos(): void {
    this.videoService.getVideos().subscribe((response) => {
      this.videos = response;
      this.videos.map((video) => {
        video.auteur = this.auteur;
      });
    });
  }
}
