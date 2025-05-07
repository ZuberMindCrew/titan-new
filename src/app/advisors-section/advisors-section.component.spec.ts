import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorsSectionComponent } from './advisors-section.component';

describe('AdvisorsSectionComponent', () => {
  let component: AdvisorsSectionComponent;
  let fixture: ComponentFixture<AdvisorsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvisorsSectionComponent]
    });
    fixture = TestBed.createComponent(AdvisorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
