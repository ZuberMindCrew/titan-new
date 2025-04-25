import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBannerComponent } from './media-banner.component';

describe('MediaBannerComponent', () => {
  let component: MediaBannerComponent;
  let fixture: ComponentFixture<MediaBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaBannerComponent]
    });
    fixture = TestBed.createComponent(MediaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
