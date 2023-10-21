import { Component } from '@angular/core';
import { VIDEOS } from 'src/app/mocks/mock-videos';

@Component({
  selector: 'app-liste-video',
  templateUrl: './liste-video.component.html',
  styleUrls: ['./liste-video.component.css'],
})
export class ListeVideoComponent {
  videos = VIDEOS;
}
