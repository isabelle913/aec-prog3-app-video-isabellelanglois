import { Component, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { IVideo } from 'src/app/interfaces/ivideo';

@Component({
  selector: 'app-info-video',
  templateUrl: './info-video.component.html',
  styleUrls: ['./info-video.component.css'],
})
export class InfoVideoComponent {
  @Input() video?: IVideo;
  isLargerThen1024 = false;

  constructor(private observer: BreakpointObserver) {
    this.observer.observe(['(min-width: 1024px)']).subscribe((result) => {
      this.isLargerThen1024 = result.breakpoints['(min-width: 1024px)'];
    });
  }
}
