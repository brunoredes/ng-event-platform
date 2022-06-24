import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordLogoComponent } from './discord-logo.component';

describe('DiscordLogoComponent', () => {
  let component: DiscordLogoComponent;
  let fixture: ComponentFixture<DiscordLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
