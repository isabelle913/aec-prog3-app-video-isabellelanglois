import { Component, Input } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.css'],
})
export class CardVideoComponent {
  @Input() video?: IVideo;
}
