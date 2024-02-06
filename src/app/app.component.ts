import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { IVideo } from 'src/app/interfaces/ivideo';
import { VIDEOS } from './mocks/mock-videos';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  videosMock = VIDEOS;
  videos: IVideo[] = [];
  utilisateur = this.videosMock[0].auteur; // TODO remplacé videosMock // TODO faire un mock utilisateur
  isSmallScreen = false;
  isLargeScreen = false;
  drawerToggle = false;
  isSmallMenuOpen = false;

  onToggleDrawer() {
    this.drawerToggle = !this.drawerToggle;
  }

  constructor(
    private observer: BreakpointObserver,
    private videoService: VideoService
  ) {
    this.observer
      .observe(['(max-width: 640px)', '(min-width: 1280px)'])
      .subscribe((result) => {
        this.isSmallScreen = result.breakpoints['(max-width: 640px)'];
        this.isLargeScreen = result.breakpoints['(min-width: 1280px)'];
      });
  }
  // https://medium.com/@pjlamb12/angular-cdks-breakpointobserver-b75df04a1cc2

  ngOnInit() {
    this.isSmallMenuOpen =
      !this.drawerToggle && !this.isSmallScreen ? true : false;

    // this.getVideos(); // TODO Pas nécessaire
  }

  getVideos(): void {
    this.videoService.getVideos().subscribe((response) => {
      this.videos = response;
    });
  }
}
