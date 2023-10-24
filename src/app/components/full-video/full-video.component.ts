import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IVideo } from 'src/app/interfaces/ivideo';
import { VIDEOS } from 'src/app/mocks/mock-videos';

@Component({
  selector: 'app-full-video',
  templateUrl: './full-video.component.html',
  styleUrls: ['./full-video.component.css'],
})
export class FullVideoComponent {
  videos = VIDEOS;
  video: IVideo | undefined;
  mediaDefaut = '../../../assets/logo_300-170.png';

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const videoCode: string | null = this.route.snapshot.paramMap.get('code');
    this.video = this.videos.find((video) => video.code === videoCode);
  }
  goBack(): void {
    this.location.back();
  }
}
