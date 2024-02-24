import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { VideoService } from 'src/app/services/video/video.service';
import { AUTEURS } from './mocks/mock-auteurs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // videosMock = VIDEOS;
  // videos: IVideo[] = [];
  utilisateur = AUTEURS[0];
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
  }
}
