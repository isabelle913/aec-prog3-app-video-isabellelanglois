import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISelect } from 'src/app/interfaces/iselect';
import { CATEGORIES } from 'src/app/mocks/mock-categories';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchWord: string = '';
  categoriesList: ISelect[] = [];
  categorySelected: string = '';

  constructor(private router: Router) {}

  setCategoriesList() {
    const categories = [...CATEGORIES];

    this.categoriesList = categories.map((category) => {
      return { value: category, viewValue: category };
    });
  }
  ngOnInit() {
    this.setCategoriesList();
  }
  onSelect() {
    if (this.categorySelected) {
      this.router.navigate(['/', 'categorie', this.categorySelected]);
    }
  }
}
