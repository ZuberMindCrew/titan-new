import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroVideo') videoElement!: ElementRef<HTMLVideoElement>;
  
  serviceAreas = [
    { index: 0, number: "01.", title: "C-Suite Alignment", active: false },
    { index: 1, number: "02.", title: "Market Expansion", active: true },
    { index: 2, number: "03.", title: "Change Management", active: false },
    { index: 3, number: "04.", title: "Communications", active: false },
    { index: 4, number: "05.", title: "Organizational Performance", active: false },
  ];

  currentIndex = 1;
  cycleInterval: any;
  videoError = false;
  videoLoaded = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.cycleInterval = setInterval(() => this.cycleServiceAreas(), 5000);
  }

  ngAfterViewInit() {
    if (this.videoElement && this.videoElement.nativeElement) {
      const video = this.videoElement.nativeElement;
      
      // Load the video
      video.load();

      // Add event listeners
      video.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
        this.videoLoaded = true;
        this.videoError = false;
        
        // Try to play the video
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.warn('Auto-play failed:', error);
            // Try playing again with user interaction
            document.addEventListener('click', () => {
              video.play().catch(e => console.warn('Play on click failed:', e));
            }, { once: true });
          });
        }
      });

      video.addEventListener('error', (e) => {
        console.error('Error loading video:', e);
        this.videoError = true;
        this.videoLoaded = false;
      });

      // Additional event listeners for debugging
      video.addEventListener('waiting', () => console.log('Video is waiting for data...'));
      video.addEventListener('playing', () => console.log('Video is playing...'));
      video.addEventListener('pause', () => console.log('Video is paused...'));
      video.addEventListener('stalled', () => console.log('Video has stalled...'));
    }
  }

  ngOnDestroy() {
    if (this.cycleInterval) {
      clearInterval(this.cycleInterval);
    }

    // Clean up video event listeners
    if (this.videoElement && this.videoElement.nativeElement) {
      const video = this.videoElement.nativeElement;
      video.removeEventListener('loadeddata', () => {});
      video.removeEventListener('error', () => {});
      video.removeEventListener('waiting', () => {});
      video.removeEventListener('playing', () => {});
      video.removeEventListener('pause', () => {});
      video.removeEventListener('stalled', () => {});
    }
  }

  cycleServiceAreas() {
    this.serviceAreas.forEach((area) => (area.active = false));
    this.currentIndex = (this.currentIndex + 1) % this.serviceAreas.length;
    this.serviceAreas[this.currentIndex].active = true;
  }

  setActiveArea(index: number) {
    this.serviceAreas.forEach((area) => (area.active = false));
    this.serviceAreas[index].active = true;
    this.currentIndex = index;

    if (this.cycleInterval) {
      clearInterval(this.cycleInterval);
    }
    this.cycleInterval = setInterval(() => this.cycleServiceAreas(), 5000);
  }

  onVideoError() {
    console.error('Video error occurred');
    this.videoError = true;
    this.videoLoaded = false;
  }
}
