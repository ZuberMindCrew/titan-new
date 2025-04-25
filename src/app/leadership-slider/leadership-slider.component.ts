import { Component } from '@angular/core';

@Component({
  selector: 'app-leadership-slider',
  templateUrl: './leadership-slider.component.html',
  styleUrls: ['./leadership-slider.component.scss']
})
export class LeadershipSliderComponent {
  slides = [
    {
      id: 1,
      title: "1. Enterprise P&L & Capital Leadership",
      description:
        "Former Managing Director at Bank of America Merrill Lynch, Citigroup, and AEGON NV — managing $500M+ in revenue and $16B+ in liquidity, driving global financial performance across banking and capital markets.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      active: true,
    },
    {
      id: 2,
      title: "2. Strategic Advisory & Consulting",
      description:
        "Trusted advisor to C-suite executives at Fortune 500 companies, providing strategic guidance on market expansion, organizational transformation, and performance optimization.",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      active: false,
    },
    {
      id: 3,
      title: "3. Change Management & Transformation",
      description:
        "Led complex organizational transformations across global enterprises, implementing strategic initiatives that delivered measurable performance improvements and sustainable growth.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      active: false,
    },
  ]

  currentIndex = 0

  ngOnInit(): void {
    // Initialize the slider
  }

  setActiveSlide(index: number): void {
    this.slides.forEach((slide) => (slide.active = false))
    this.slides[index].active = true
    this.currentIndex = index
  }

  nextSlide(): void {
    const nextIndex = (this.currentIndex + 1) % this.slides.length
    this.setActiveSlide(nextIndex)
  }

  prevSlide(): void {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
    this.setActiveSlide(prevIndex)
  }
}
