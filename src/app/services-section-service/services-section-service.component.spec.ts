import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectionServiceComponent } from './services-section-service.component';

describe('ServicesSectionServiceComponent', () => {
  let component: ServicesSectionServiceComponent;
  let fixture: ComponentFixture<ServicesSectionServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesSectionServiceComponent]
    });
    fixture = TestBed.createComponent(ServicesSectionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
