import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicOutlookComponent } from './strategic-outlook.component';

describe('StrategicOutlookComponent', () => {
  let component: StrategicOutlookComponent;
  let fixture: ComponentFixture<StrategicOutlookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategicOutlookComponent]
    });
    fixture = TestBed.createComponent(StrategicOutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
