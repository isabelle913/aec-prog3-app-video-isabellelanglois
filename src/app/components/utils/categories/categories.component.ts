import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

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

  categoriesSelected: string[] = [];
  availableColors: string[] = ['primary', 'accent', 'warn'];

  randomColor() {
    if (this.color === false) return;
    const indexRandom = Math.trunc(Math.random() * 3) + 1;
    return this.availableColors[indexRandom];
  }
  // TODO ne pas pouvoir les sélectionner/desélectionner des full vidéos

  onSelect(value: string) {
    console.log(value);
  }
  selected(): void {
    console.log('Miip');
    // console.log('event', event);
    // this.categoriesSelected.push(event.option.viewValue);
    // console.log('categoriesSelected', this.categoriesSelected);
    // this.fruitInput.nativeElement.value = '';
    // this.fruitCtrl.setValue(null);
  }
}
