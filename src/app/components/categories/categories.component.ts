import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  @Input() categories: string[] = [];
  @Input() stacked: boolean = false;
  @Input() color: boolean = false;

  colorPosition = -1;
  availableColors: string[] = ['primary', 'accent', 'warn'];

  randomColor() {
    if (this.color === false) return;
    const indexRandom = Math.trunc(Math.random() * 3) + 1;
    console.log('indexRandom', indexRandom);
    return this.availableColors[indexRandom];
  }

  getColor() {
    if (this.colorPosition > this.availableColors.length - 1) {
      this.colorPosition = -1;
    }
    this.colorPosition++;
    console.log('colorPosition', this.colorPosition);
    return this.availableColors[this.colorPosition];
  }
  ngOnInit() {
    this.colorPosition = -1;
  }
}
// TODO ?? voir erreur dans console
