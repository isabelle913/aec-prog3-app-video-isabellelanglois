import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStdComponent } from './menu-std.component';

describe('MenuStdComponent', () => {
  let component: MenuStdComponent;
  let fixture: ComponentFixture<MenuStdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuStdComponent]
    });
    fixture = TestBed.createComponent(MenuStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
