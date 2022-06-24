import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileArrowDownComponent } from './file-arrow-down.component';

describe('FileArrowDownComponent', () => {
  let component: FileArrowDownComponent;
  let fixture: ComponentFixture<FileArrowDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileArrowDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileArrowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
