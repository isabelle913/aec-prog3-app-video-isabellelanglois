import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { VIDEOS } from './mocks/mock-videos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  videos = VIDEOS;
  utilisateur = this.videos[0].auteur;
  isSmallScreen = false;
  isLargeScreen = false;
  drawerToggle = false;
  isSmallMenuOpen = false;

  onToggleDrawer() {
    this.drawerToggle = !this.drawerToggle;
  }

  constructor(private observer: BreakpointObserver) {
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
