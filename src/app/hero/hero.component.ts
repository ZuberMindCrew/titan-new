import { Component, type OnInit, type OnDestroy } from "@angular/core"

interface ServiceArea {
  index: number
  number: string
  title: string
  active: boolean
}

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit, OnDestroy {
  serviceAreas: ServiceArea[] = [
    { index: 0, number: "01.", title: "C-Suite Alignment", active: false },
    { index: 1, number: "02.", title: "Impact Communications", active: false },
    { index: 2, number: "03.", title: "High Performance", active: false },
    { index: 3, number: "04.", title: "Market Expansion", active: true }, // Set Communications as active
    { index: 4, number: "05.", title: "Transformation", active: false },
  ]

  currentIndex = 3 // Start with Communications active (index 3)
  cycleInterval: any
  videoError = false

  private async tryPlayVideo(video: HTMLVideoElement) {
    try {
      // Set video to very low volume instead of muted
      video.volume = 0.001;
      await video.play();
      // Now mute it after successful play
      video.muted = true;
    } catch (error) {
      console.log("Initial play failed, trying with muted:", error);
      // If first attempt failed, try with muted
      video.muted = true;
      try {
        await video.play();
      } catch (err) {
        console.log("Video autoplay failed completely:", err);
        this.videoError = true;
      }
    }
  }

  ngOnInit() {
    // Start automatic cycling
    this.cycleInterval = setInterval(() => this.cycleServiceAreas(), 5000)

    // Handle video with retry mechanism
    setTimeout(async () => {
      const video = document.querySelector("video") as HTMLVideoElement;
      if (video) {
        video.load();
        
        // Try to play immediately
        await this.tryPlayVideo(video);

        // Add visibility change handler
        document.addEventListener('visibilitychange', async () => {
          if (!document.hidden && video.paused) {
            await this.tryPlayVideo(video);
          }
        });

        // Add scroll handler to try playing when user interacts
        window.addEventListener('scroll', async () => {
          if (video.paused) {
            await this.tryPlayVideo(video);
          }
        }, { once: true });
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
