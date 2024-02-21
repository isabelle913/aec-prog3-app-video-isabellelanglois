import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVideo } from 'src/app/interfaces/ivideo';
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

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}
  // TODO ménage
  toggleCategory(category: string) {
    console.log('categoriesSelected 0', this.categoriesSelected);
    console.log('categories 0', this.categories);

    if (this.categoriesSelected.includes(category)) {
      const index = this.categoriesSelected.indexOf(category);
      this.categoriesSelected.splice(index, 1);
    } else {
      this.categoriesSelected.push(category);
    }
    console.log('categoriesSelected 1', this.categoriesSelected);
    console.log('categories 1', this.categories);
    console.log('CATEGORIES 1', CATEGORIES);
  }

  ngOnInit(): void {
    const isFavorite: boolean | null =
      this.route.snapshot.url[1] &&
      this.route.snapshot.url[1].path === 'favorite'
        ? true
        : false;

    isFavorite ? (this.minScore = 1000) : undefined;

    this.categoriesSelected = [...CATEGORIES];
    // console.log('categoriesSelected', this.categoriesSelected);

    this.getVideos();
  }

  formatLabel(value: number) {
    this.minScore = value;
    return `${this.minScore}`;
  }

  getVideos(): void {
    this.videoService.getVideos().subscribe((response) => {
      this.videos = response;
    });
  }
}
