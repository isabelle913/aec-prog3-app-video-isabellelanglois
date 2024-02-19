import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionnementComponent } from './visionnement.component';

describe('VisionnementComponent', () => {
  let component: VisionnementComponent;
  let fixture: ComponentFixture<VisionnementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionnementComponent]
    });
    fixture = TestBed.createComponent(VisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
