import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IVideo } from 'src/app/interfaces/ivideo';

@Component({
  selector: 'app-small-video',
  templateUrl: './small-video.component.html',
  styleUrls: ['./small-video.component.css'],
})
export class SmallVideoComponent {
  @Input() video?: IVideo;
  mediaDefaut = '../../../assets/logo_300-170.png';

  constructor(private router: Router) {}

  goTo() {
    if (this.video) {
      this.router.navigate(['/', 'video', this.video.code]);
    }
  }
}
