import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureProofComponent } from './future-proof.component';

describe('FutureProofComponent', () => {
  let component: FutureProofComponent;
  let fixture: ComponentFixture<FutureProofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureProofComponent]
    });
    fixture = TestBed.createComponent(FutureProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
