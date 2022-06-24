import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidVideoComponent } from './void-video.component';

describe('VoidVideoComponent', () => {
  let component: VoidVideoComponent;
  let fixture: ComponentFixture<VoidVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
