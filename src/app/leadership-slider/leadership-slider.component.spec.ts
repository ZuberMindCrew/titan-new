import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipSliderComponent } from './leadership-slider.component';

describe('LeadershipSliderComponent', () => {
  let component: LeadershipSliderComponent;
  let fixture: ComponentFixture<LeadershipSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadershipSliderComponent]
    });
    fixture = TestBed.createComponent(LeadershipSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
