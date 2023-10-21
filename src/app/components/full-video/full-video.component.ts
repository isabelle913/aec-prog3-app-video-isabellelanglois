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
  videoCurrent: IVideo | undefined;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const videoCode: string | null = this.route.snapshot.paramMap.get('code');
    console.log(videoCode);
    this.videoCurrent = this.videos.find((video) => video.code === videoCode);
    console.log(this.videoCurrent);
  }
  goBack(): void {
    this.location.back();
  }
}

// TODO effacer les console.log
