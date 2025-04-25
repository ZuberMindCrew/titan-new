import { Component, type ElementRef, HostListener, ViewChild } from "@angular/core"

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
export class LeadershipSliderComponent {
  @ViewChild("sliderContainer") sliderContainer!: ElementRef

  currentSlide = 0
  totalSlides = 4
  isAnimating = false

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
      title: "Strategic Growth & GTM Execution",
      description:
        "Led U.S. and North American expansion for financial and fintech institutions, including B2B payments and lending. Built and executed GTM strategies that fueled scale, compliance, and infrastructure transformation.",
    },
    {
      id: 3,
      mainImage: "https://framerusercontent.com/images/9tihVDgmIjE9YcdbUveeRROMIl0.jpg?scale-down-to=2048",
      thumbnailImage: "https://framerusercontent.com/images/7ST3Zhsn4noPkFT9RujmHCO0.jpg?scale-down-to=2048",
      title: "Crisis Leadership & Transformation",
      description:
        "Guided organizations through high-stakes scenarios — including corporate restructures, financial crises, and industry disasters (e.g., BP, PG&E, ExxonMobil & ConocoPhillips) — with expertise in stabilization and turnaround strategy.",
    },
    {
      id: 4,
      mainImage: "https://framerusercontent.com/images/7ST3Zhsn4noPkFT9RujmHCO0.jpg?scale-down-to=2048",
      thumbnailImage:
        "https://framerusercontent.com/images/oignU66RoHJ7hueHSR0axLviGY.jpg?scale-down-to=2048",
      title: "Capital Advisory & Leadership Acceleration",
      description:
        "CEO & Founder of Titan Edge Advisory, since 2016, recognized by Forbes Council. Co-founded an impact investment firm and built strategic executive programs that drive exponential leadership growth and capital efficiency across high-growth businesses.",
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  nextSlide(): void {
    if (this.isAnimating) return

    this.isAnimating = true
    const navButton = document.querySelector(".nav-arrow.next") as HTMLElement

    if (navButton) {
      navButton.classList.add("active")
      setTimeout(() => {
        navButton.classList.remove("active")
      }, 300)
    }

    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++
    } else {
      this.currentSlide = 0
    }

    setTimeout(() => {
      this.isAnimating = false
    }, 800)
  }

  prevSlide(): void {
    if (this.isAnimating) return

    this.isAnimating = true
    const navButton = document.querySelector(".nav-arrow.prev") as HTMLElement

    if (navButton) {
      navButton.classList.add("active")
      setTimeout(() => {
        navButton.classList.remove("active")
      }, 300)
    }

    if (this.currentSlide > 0) {
      this.currentSlide--
    } else {
      this.currentSlide = this.totalSlides - 1
    }

    setTimeout(() => {
      this.isAnimating = false
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
    if (event.key === "ArrowRight") {
      this.nextSlide()
    }
    if (event.key === "ArrowLeft") {
      this.prevSlide()
    }
  }
}
