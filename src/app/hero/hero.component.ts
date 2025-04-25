import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  serviceAreas =[
    { index: 0, number: "01.", title: "C-Suite Alignment", active: false },
    { index: 1, number: "02.", title: "Market Expansion", active: true }, // Changed to active
    { index: 2, number: "03.", title: "Change Management", active: false },
    { index: 3, number: "04.", title: "Communications", active: false },
    { index: 4, number: "05.", title: "Organizational Performance", active: false }, // Changed to inactive
  ]

  currentIndex = 1 // Start with Market Expansion active (index 1)
  cycleInterval: any
  videoError = false

  ngOnInit() {
    // Start automatic cycling
    this.cycleInterval = setInterval(() => this.cycleServiceAreas(), 5000)

    // Handle video loading
    setTimeout(() => {
      const video = document.querySelector("video")
      if (video) {
        video.load()
        video.play().catch((error) => {
          console.log("Video autoplay failed:", error)
          this.videoError = true
        })
      }
    }, 100)
  }

  ngOnDestroy() {
    // Clear interval when component is destroyed
    if (this.cycleInterval) {
      clearInterval(this.cycleInterval)
    }
  }

  cycleServiceAreas() {
    this.serviceAreas.forEach((area) => (area.active = false))
    this.currentIndex = (this.currentIndex + 1) % this.serviceAreas.length
    this.serviceAreas[this.currentIndex].active = true
  }

  setActiveArea(index: number) {
    this.serviceAreas.forEach((area) => (area.active = false))
    this.serviceAreas[index].active = true
    this.currentIndex = index

    // Reset the timer when manually clicked
    if (this.cycleInterval) {
      clearInterval(this.cycleInterval)
    }
    this.cycleInterval = setInterval(() => this.cycleServiceAreas(), 5000)
  }

  onVideoError() {
    this.videoError = true
  }
}
