import {
  Component,
  type ElementRef,
  HostListener,
  ViewChild,
  type AfterViewInit,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from "@angular/core"
import { isPlatformBrowser } from "@angular/common"

interface SlideItem {
  id: number
  mainImage: string
  thumbnailImage: string
  title: string
  description: string
}

@Component({
  selector: "app-leadership-slider",
  templateUrl: "./leadership-slider.component.html",
  styleUrls: ["./leadership-slider.component.scss"],
})
export class LeadershipSliderComponent implements AfterViewInit {
  @ViewChild("sliderContainer") sliderContainer!: ElementRef

  currentSlide = 0
  totalSlides = 4
  isAnimating = false
  isTouchDevice = false
  imagesLoaded = false

  slides: SlideItem[] = [
    {
      id: 1,
      mainImage: "https://framerusercontent.com/images/oignU66RoHJ7hueHSR0axLviGY.jpg?scale-down-to=2048",
      thumbnailImage: "https://framerusercontent.com/images/0lGRwLn7wxL3yhav7d46r1ooW3A.jpg?scale-down-to=2048",
      title: "Enterprise P&L & Capital Leadership",
      description:
        "Former Managing Director at Bank of America Merrill Lynch, Citigroup, and AEGON NV — managing $500M+ in revenue and $16B+ in liquidity, driving global financial performance across banking and capital markets.",
    },
    {
      id: 2,
      mainImage: "https://framerusercontent.com/images/0lGRwLn7wxL3yhav7d46r1ooW3A.jpg?scale-down-to=2048",
      thumbnailImage: "https://framerusercontent.com/images/9tihVDgmIjE9YcdbUveeRROMIl0.jpg?scale-down-to=2048",
      title: "Strategic Advisory & Consulting",
      description:
        "Led transformational initiatives for Fortune 500 companies, delivering strategic growth plans and operational excellence frameworks that resulted in 30%+ efficiency improvements and $200M+ in cost savings.",
    },
    {
      id: 3,
      mainImage: "https://framerusercontent.com/images/9tihVDgmIjE9YcdbUveeRROMIl0.jpg?scale-down-to=2048",
      thumbnailImage: "https://framerusercontent.com/images/7ST3Zhsn4noPkFT9RujmHCO0.jpg?scale-down-to=2048",
      title: "Organizational Development",
      description:
        "Specialized in executive leadership development and C-suite alignment, building high-performance teams and implementing change management strategies that accelerated growth and innovation.",
    },
    {
      id: 4,
      mainImage: "https://framerusercontent.com/images/7ST3Zhsn4noPkFT9RujmHCO0.jpg?scale-down-to=2048",
      thumbnailImage: "https://framerusercontent.com/images/oignU66RoHJ7hueHSR0axLviGY.jpg?scale-down-to=2048",
      title: "Capital Advisory & Leadership Acceleration",
      description:
        "CEO & Founder of Titan Edge Advisory, since 2016, recognized by Forbes Council. Co-founded an impact investment firm and built strategic executive programs that drive exponential leadership growth and capital efficiency across high-growth businesses.",
    },
  ];

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only run browser-specific code here
      this.preloadImages()

      // Detect if device is touch-enabled
      this.isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

      // Add specific class for touch devices
      if (this.isTouchDevice && this.sliderContainer) {
        this.renderer.addClass(this.sliderContainer.nativeElement, "touch-device")
      }

      // Force border-radius on all elements
      setTimeout(() => {
        this.applyBorderRadius()
      }, 100)

      // Handle orientation change
      window.addEventListener("orientationchange", () => {
        setTimeout(() => {
          this.handleOrientationChange()
          this.applyBorderRadius()
        }, 200)
      })
    }
  }

  // Preload all images to ensure they're available
  preloadImages(): void {
    let loadedCount = 0
    const totalImages = this.slides.length * 2 // Main + thumbnail for each slide

    const checkAllLoaded = () => {
      loadedCount++
      if (loadedCount === totalImages) {
        this.imagesLoaded = true
        // Force a layout update
        setTimeout(() => {
          this.applyBorderRadius()
        }, 100)
      }
    }

    // Preload all main images
    this.slides.forEach((slide) => {
      const mainImg = new Image()
      mainImg.onload = checkAllLoaded
      mainImg.onerror = checkAllLoaded // Count errors too to avoid hanging
      mainImg.src = slide.mainImage

      const thumbImg = new Image()
      thumbImg.onload = checkAllLoaded
      thumbImg.onerror = checkAllLoaded
      thumbImg.src = slide.thumbnailImage
    })
  }

  // Apply border-radius to ensure it works
  applyBorderRadius(): void {
    if (!isPlatformBrowser(this.platformId)) return

    const containers = document.querySelectorAll(".main-image-container")
    const bottomOverlays = document.querySelectorAll(".image-bottom-overlay")

    containers.forEach((container: Element) => {
      this.renderer.setStyle(container, "overflow", "hidden")

      if (window.innerWidth <= 375) {
        this.renderer.setStyle(container, "border-radius", "8px")
      } else if (window.innerWidth <= 768) {
        this.renderer.setStyle(container, "border-radius", "12px")
      } else {
        this.renderer.setStyle(container, "border-radius", "16px")
      }
    })

    bottomOverlays.forEach((overlay: Element) => {
      if (window.innerWidth <= 375) {
        this.renderer.setStyle(overlay, "border-radius", "0 0 8px 8px")
      } else if (window.innerWidth <= 768) {
        this.renderer.setStyle(overlay, "border-radius", "0 0 12px 12px")
      } else {
        this.renderer.setStyle(overlay, "border-radius", "0 0 16px 16px")
      }
    })
  }

  handleOrientationChange(): void {
    if (!isPlatformBrowser(this.platformId)) return

    // Adjust layout based on new orientation
    // This timeout allows the browser to complete the orientation change
    const isLandscape = window.innerWidth > window.innerHeight
    if (isLandscape && window.innerHeight < 600) {
      // Apply specific styles for landscape on small devices
      if (this.sliderContainer) {
        this.renderer.addClass(this.sliderContainer.nativeElement, "landscape-small")
      }
    } else {
      if (this.sliderContainer) {
        this.renderer.removeClass(this.sliderContainer.nativeElement, "landscape-small")
      }
    }

    // Reapply border radius after orientation change
    setTimeout(() => {
      this.applyBorderRadius()
    }, 300)
  }

  nextSlide(): void {
    if (this.isAnimating) return

    this.isAnimating = true
    if (isPlatformBrowser(this.platformId)) {
      const navButton = document.querySelector(".nav-arrow.next") as HTMLElement

      if (navButton) {
        navButton.classList.add("active")
        setTimeout(() => {
          navButton.classList.remove("active")
        }, 300)
      }
    }

    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++
    } else {
      this.currentSlide = 0
    }

    setTimeout(() => {
      this.isAnimating = false
      this.applyBorderRadius() // Reapply border radius after slide change
    }, 800)
  }

  prevSlide(): void {
    if (this.isAnimating) return

    this.isAnimating = true
    if (isPlatformBrowser(this.platformId)) {
      const navButton = document.querySelector(".nav-arrow.prev") as HTMLElement

      if (navButton) {
        navButton.classList.add("active")
        setTimeout(() => {
          navButton.classList.remove("active")
        }, 300)
      }
    }

    if (this.currentSlide > 0) {
      this.currentSlide--
    } else {
      this.currentSlide = this.totalSlides - 1
    }

    setTimeout(() => {
      this.isAnimating = false
      this.applyBorderRadius() // Reapply border radius after slide change
    }, 800)
  }

  goToSlide(index: number): void {
    if (this.isAnimating || index === this.currentSlide) return

    this.isAnimating = true

    if (index >= 0 && index < this.totalSlides) {
      this.currentSlide = index
    }

    setTimeout(() => {
      this.isAnimating = false
      this.applyBorderRadius() // Reapply border radius after slide change
    }, 800)
  }

  getPrevIndex(): number {
    return this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1
  }

  getNextIndex(): number {
    return this.currentSlide === this.totalSlides - 1 ? 0 : this.currentSlide + 1
  }

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!isPlatformBrowser(this.platformId)) return

    if (event.key === "ArrowRight") {
      this.nextSlide()
    }
    if (event.key === "ArrowLeft") {
      this.prevSlide()
    }
  }

  @HostListener("window:resize")
  onResize(): void {
    if (!isPlatformBrowser(this.platformId)) return

    // Reapply border radius when window is resized
    this.applyBorderRadius()
  }

  // Swipe handling for touch devices
  startX = 0
  startY = 0

  @HostListener("touchstart", ["$event"])
  onTouchStart(event: TouchEvent): void {
    if (!isPlatformBrowser(this.platformId)) return

    this.startX = event.touches[0].clientX
    this.startY = event.touches[0].clientY
  }

  @HostListener("touchend", ["$event"])
  onTouchEnd(event: TouchEvent): void {
    if (!isPlatformBrowser(this.platformId)) return

    const endX = event.changedTouches[0].clientX
    const endY = event.changedTouches[0].clientY

    const diffX = this.startX - endX
    const diffY = this.startY - endY

    // Only register as swipe if horizontal movement is greater than vertical
    // and greater than a minimum threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe left, go to next slide
        this.nextSlide()
      } else {
        // Swipe right, go to previous slide
        this.prevSlide()
      }
    }
  }
}
