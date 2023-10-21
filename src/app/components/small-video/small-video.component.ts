import { Component, Input } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';

@Component({
  selector: 'app-small-video',
  templateUrl: './small-video.component.html',
  styleUrls: ['./small-video.component.css'],
})
export class SmallVideoComponent {
  @Input() video?: IVideo;

  mediaDefaut = '../../../assets/logo_300-170.png';
}
