import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveForumComponent } from './executive-forum.component';

describe('ExecutiveForumComponent', () => {
  let component: ExecutiveForumComponent;
  let fixture: ComponentFixture<ExecutiveForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutiveForumComponent]
    });
    fixture = TestBed.createComponent(ExecutiveForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
