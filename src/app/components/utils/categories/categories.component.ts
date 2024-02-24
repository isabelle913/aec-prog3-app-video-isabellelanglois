import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CATEGORIES } from 'src/app/mocks/mock-categories';

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
  @Input() isActiveEvent: boolean = true;
  @Output() toggleCategoryEvent = new EventEmitter<string>();

  availableColors: string[] = ['primary', 'accent', 'warn'];

  onToggleCategory(categorie: string) {
    if (!this.isActiveEvent) return;
    this.toggleCategoryEvent.emit(categorie);
  }
  randomColor() {
    if (this.color === false) return;
    const indexRandom = Math.trunc(Math.random() * 3) + 1;
    return this.availableColors[indexRandom];
  }
}
