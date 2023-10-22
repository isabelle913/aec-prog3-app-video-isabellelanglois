import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  @Input() categories: string[] = [];
  @Input() stacked: boolean = false;

  randomColor() {
    const indexRandom = Math.trunc(Math.random() * 3) + 1;
    console.log(indexRandom);
    return this.availableColors[indexRandom];
  }

  availableColors: string[] = ['primary', 'accent', 'warn'];
}
// TODO ?? voir erreur dans console
