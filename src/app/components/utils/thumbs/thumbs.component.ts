import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.css'],
})
export class ThumbsComponent {
  @Input() score = 0;

  increase() {
    this.score++;
  }

  decrease() {
    this.score--;
  }
}
