import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTitanComponent } from './why-titan.component';

describe('WhyTitanComponent', () => {
  let component: WhyTitanComponent;
  let fixture: ComponentFixture<WhyTitanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyTitanComponent]
    });
    fixture = TestBed.createComponent(WhyTitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
