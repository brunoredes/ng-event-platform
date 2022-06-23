import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsAsideComponent } from './lessons-aside.component';

describe('LessonsAsideComponent', () => {
  let component: LessonsAsideComponent;
  let fixture: ComponentFixture<LessonsAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
