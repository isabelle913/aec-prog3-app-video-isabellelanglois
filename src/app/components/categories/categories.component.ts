import { Component } from '@angular/core';
import { CATEGORIES } from 'src/app/mocks/mock-categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories = CATEGORIES;
}
