import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVideoComponent } from './liste-video.component';

describe('ListeVideoComponent', () => {
  let component: ListeVideoComponent;
  let fixture: ComponentFixture<ListeVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeVideoComponent]
    });
    fixture = TestBed.createComponent(ListeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
