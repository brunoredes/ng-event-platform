import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberViewerComponent } from './subscriber-viewer.component';

describe('SubscriberViewerComponent', () => {
  let component: SubscriberViewerComponent;
  let fixture: ComponentFixture<SubscriberViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
