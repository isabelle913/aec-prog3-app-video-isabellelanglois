import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IVideo } from 'src/app/interfaces/ivideo';
import { VIDEOS } from 'src/app/mocks/mock-videos';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-full-video',
  templateUrl: './full-video.component.html',
  styleUrls: ['./full-video.component.css'],
})
export class FullVideoComponent {
  // videos = VIDEOS;
  videos: IVideo[] = [];
  video: IVideo | undefined;
  mediaDefaut = '../../../assets/logo_300-170.png';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.getVideos();
  }
  goBack(): void {
    this.location.back();
  }
  getVideos(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.videoService.getVideos().subscribe((response) => {
      this.videos = response;
      this.video = this.videos.find((video) => video.id === id);
    });
  }
}
