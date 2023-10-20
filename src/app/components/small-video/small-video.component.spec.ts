import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallVideoComponent } from './small-video.component';

describe('SmallVideoComponent', () => {
  let component: SmallVideoComponent;
  let fixture: ComponentFixture<SmallVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallVideoComponent],
    });
    fixture = TestBed.createComponent(SmallVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
