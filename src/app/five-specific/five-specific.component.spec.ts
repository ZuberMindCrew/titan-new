import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveSpecificComponent } from './five-specific.component';

describe('FiveSpecificComponent', () => {
  let component: FiveSpecificComponent;
  let fixture: ComponentFixture<FiveSpecificComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveSpecificComponent]
    });
    fixture = TestBed.createComponent(FiveSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
