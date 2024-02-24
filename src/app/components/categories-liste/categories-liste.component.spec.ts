import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListeComponent } from './categories-liste.component';

describe('CategoriesListeComponent', () => {
  let component: CategoriesListeComponent;
  let fixture: ComponentFixture<CategoriesListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesListeComponent]
    });
    fixture = TestBed.createComponent(CategoriesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
