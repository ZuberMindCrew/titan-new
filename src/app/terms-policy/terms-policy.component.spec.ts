import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsPolicyComponent } from './terms-policy.component';

describe('TermsPolicyComponent', () => {
  let component: TermsPolicyComponent;
  let fixture: ComponentFixture<TermsPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsPolicyComponent]
    });
    fixture = TestBed.createComponent(TermsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
