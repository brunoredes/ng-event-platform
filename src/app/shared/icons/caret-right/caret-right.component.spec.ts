import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretRightComponent } from './caret-right.component';

describe('CaretRightComponent', () => {
  let component: CaretRightComponent;
  let fixture: ComponentFixture<CaretRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaretRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
