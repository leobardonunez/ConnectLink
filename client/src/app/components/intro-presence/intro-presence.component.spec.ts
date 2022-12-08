import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPresenceComponent } from './intro-presence.component';

describe('IntroPresenceComponent', () => {
  let component: IntroPresenceComponent;
  let fixture: ComponentFixture<IntroPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroPresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
