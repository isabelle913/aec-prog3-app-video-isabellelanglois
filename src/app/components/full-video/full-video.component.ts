import { Component, Input } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';

@Component({
  selector: 'app-full-video',
  templateUrl: './full-video.component.html',
  styleUrls: ['./full-video.component.css'],
})
export class FullVideoComponent {
  @Input() video?: IVideo;
}
