import { Component, Input } from '@angular/core';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.css'],
})
export class ThumbsComponent {
  @Input() score = 0;
  @Input() id_video = 0;
  objScore = { score: 0 };

  constructor(private scoreService: ScoreService) {}

  getScore() {
    this.scoreService.getScore(this.id_video).subscribe((response) => {
      this.score = response.score;
    });
  }

  increase() {
    this.scoreService.updateScore(this.id_video, 'add').subscribe(() => {
      this.getScore();
    });
  }

  decrease() {
    this.scoreService.updateScore(this.id_video, 'lower').subscribe(() => {
      this.getScore();
    });
  }
}
