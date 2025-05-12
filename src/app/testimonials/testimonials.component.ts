import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
  linkedin: string;
}
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;
  
  currentSlide = 0;
  totalSlides = 0;
  visibleSlides = 3;
  
  testimonials: Testimonial[] = [
    {
      name: 'Kari Jones',
      title: 'Talent Manager, Forbes',
      quote: 'Carrie is a force of nature—her impact on individuals and corporate learning is nothing short of transformative.',
      image: 'assets/kari-jones.png',
      linkedin: 'https://www.linkedin.com/in/kari-jones-e/'
    },
    {
      name: 'Dr. Donald P. Addison',
      title: 'Adjunct Professor, University of Florida & University of Georgia',
      quote: 'Carrie\'s strategic thinking and leadership development expertise have been instrumental in transforming banking and financial industries.',
      image: 'assets/donald.png',
      linkedin: 'https://www.linkedin.com/in/donaldpaddisonii/'
    },
    {
      name: 'Maggie Seidel',
      title: 'EVP of External Affairs & Chief of Staff, Finseca',
      quote: 'Carrie & Titan Edge Advisory is a transformative force in leadership coaching and advisory services —her strategic guidance helped me gain clarity, confidence, and the tactical tools to navigate challenges with ease.',
      image: 'assets/maggie.png',
      linkedin: 'https://www.linkedin.com/in/maggie-seidel-97345132/'
    },
    {
      name: 'Kim Martin',
      title: 'Digital Client Experience (CX) Leadership',
      quote: 'Carrie\'s mentorship has been life-changing—she helped me break through limiting beliefs, elevate my leadership, and achieve career milestones I once thought impossible. My first real total comp (TC) increase was 70% with a base increase of 90%+. Since then I have increased my TC by another 55%.',
      image: 'assets/kinmartin.png',
      linkedin: 'https://www.linkedin.com/in/kim-martin/'
    },
    {
      name: 'Shriya Vilemas',
      title: 'Investor Services, Winton',
      quote: 'Carrie has an unparalleled ability to bring out the best in people, helping them unlock their strengths and step into their potential.',
      image: 'assets/shriya.png',
      linkedin: 'https://www.linkedin.com/in/shriya-vilemas-5babb1135/'
    },
    {
      name: 'Ann Ruane',
      title: 'Senior Vice President, Merrill Lynch',
      quote: 'Titan Edge Advisory helped me think outside the box to grow my business, own my expertise, and confidently position myself for greater success.',
      image: 'assets/ann.png',
      linkedin: 'https://www.linkedin.com/in/annruane/'
    },
    {
      name: 'Shannon Burch',
      title: 'Vice President, Experience, Neo Financial',
      quote: 'Carrie helped me redefine my leadership identity, giving me the confidence to step into C-suite and advocate for my true value.',
      image: 'assets/shanon.png',
      linkedin: 'https://www.linkedin.com/in/shannon-burch/'
    },
    {
      name: 'Triné Alimena',
      title: 'Head of US Cash, Liquidity & NA Balance Sheet Mgmt, BNP Paribas Corporate and Institutional Banking',
      quote: 'Carrie is an exceptional leader who masterfully balances organizational dynamics, profitability, and empowering those around her.',
      image: 'assets/trine.png',
      linkedin: 'https://www.linkedin.com/in/triné-alimena-9a208632/'
    },
    {
      name: 'Ken Hanson',
      title: 'Product, Experimentation, and Growth Leadership, K2 Cyber',
      quote: 'Carrie\'s executive advice was foundational—her leadership vision exercises aligned with my aspirations and gave me the confidence to step fully into who I am today.',
      image: 'assets/kenhanson.png',
      linkedin: 'https://www.linkedin.com/in/kenhanson/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalSlides();
  }

  ngAfterViewInit(): void {
    this.setupCarousel();
  }

  calculateTotalSlides(): void {
    // Set a fixed number of slides to match our 5 navigation dots
    this.totalSlides = 3
  }

  setupCarousel(): void {
    // Initial setup
    this.updateCarouselPosition();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.updateVisibleSlides();
      this.calculateTotalSlides();
      this.updateCarouselPosition();
    });
    
    // Initial call to set visible slides based on screen size
    this.updateVisibleSlides();
  }
  
  updateVisibleSlides(): void {
    // Adjust visible slides based on screen width
    if (window.innerWidth >= 1200) {
      this.visibleSlides = 2; // Show 2 testimonials per "page" on desktop
    } else if (window.innerWidth >= 768) {
      this.visibleSlides = 2; // Show 2 testimonials per "page" on tablet
    } else {
      this.visibleSlides = 1; // Show 1 testimonial per "page" on mobile
    }
    // Keep the total slides fixed at 5
    this.totalSlides = 3;
  }

  updateCarouselPosition(): void {
    if (this.carouselTrack && this.carouselTrack.nativeElement) {
      // Calculate position based on testimonials array and fixed number of dots
      const itemsPerSlide = Math.ceil(this.testimonials.length / this.totalSlides);
      const startIndex = this.currentSlide * itemsPerSlide;
      
      // Calculate slide width differently to accommodate 5 dots with 9 testimonials
      const slideWidth = 100;
      const offset = -startIndex * (slideWidth / itemsPerSlide);
      
      this.carouselTrack.nativeElement.style.transform = `translateX(${offset}%)`;
    }
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateCarouselPosition();
    }
  }

  nextSlide(): void {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
      this.updateCarouselPosition();
    }
  }

  goToSlide(index: number): void {
    // Remove the bounds check to allow all 5 dots to be clicked
    this.currentSlide = index;
    this.updateCarouselPosition();
  }

  getDotArray(): number[] {
    return Array(this.totalSlides).fill(0).map((_, i) => i);
  }
}
