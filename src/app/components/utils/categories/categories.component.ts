import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() categories: string[] | undefined = [];
  @Input() stacked: boolean = false;
  @Input() color: boolean = false;

  availableColors: string[] = ['primary', 'accent', 'warn'];

  randomColor() {
    if (this.color === false) return;
    const indexRandom = Math.trunc(Math.random() * 3) + 1;
    return this.availableColors[indexRandom];
  }
}
