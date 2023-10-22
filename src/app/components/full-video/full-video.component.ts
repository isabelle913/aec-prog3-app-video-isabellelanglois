import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
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
  isLargerThen1024 = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private observer: BreakpointObserver
  ) {
    this.observer.observe(['(min-width: 1024px)']).subscribe((result) => {
      this.isLargerThen1024 = result.breakpoints['(min-width: 1024px)'];
    });
  }

  ngOnInit(): void {
    const videoCode: string | null = this.route.snapshot.paramMap.get('code');
    this.video = this.videos.find((video) => video.code === videoCode);
  }
  goBack(): void {
    this.location.back();
  }
}

// TODO effacer les console.log
