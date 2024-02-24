import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAuteur } from 'src/app/interfaces/iauteur';
import { IVideo } from 'src/app/interfaces/ivideo';
import { AUTEURS } from 'src/app/mocks/mock-auteurs';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-categories-liste',
  templateUrl: './categories-liste.component.html',
  styleUrls: ['./categories-liste.component.css'],
})
export class CategoriesListeComponent {
  videos: IVideo[] = [];
  videosFiltered: IVideo[] = [];
  auteur: IAuteur = AUTEURS[0];
  categorySelected: string = '';

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('categorie');

    if (typeof category === 'string') this.categorySelected = category;
    this.getVideos();

  }

  getVideosByCategory() {

    if (this.categorySelected && this.categorySelected !== '') {
      this.videosFiltered = this.videos.filter((video) =>
        video.categories.includes(this.categorySelected)
      );
    }
  }
  getVideos(): void {
    this.videoService.getVideos().subscribe((response) => {
      this.videos = response;
      this.videos.map((video) => {
        video.auteur = this.auteur;
      });
      this.getVideosByCategory();
    });
  }
}
