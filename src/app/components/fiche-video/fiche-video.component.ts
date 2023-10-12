import { Component, Input } from '@angular/core';
import { IVideo } from 'src/app/interfaces/ivideo';

@Component({
  selector: 'app-fiche-video',
  templateUrl: './fiche-video.component.html',
  styleUrls: ['../../shared/shared-style.css', './fiche-video.component.css'],
})
export class FicheVideoComponent {
  @Input() video?: IVideo;
}
