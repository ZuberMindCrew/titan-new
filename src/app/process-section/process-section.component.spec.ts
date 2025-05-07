import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSectionComponent } from './process-section.component';

describe('ProcessSectionComponent', () => {
  let component: ProcessSectionComponent;
  let fixture: ComponentFixture<ProcessSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessSectionComponent]
    });
    fixture = TestBed.createComponent(ProcessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
