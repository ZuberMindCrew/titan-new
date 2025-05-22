
// import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

// interface Testimonial {
//   name: string;
//   title: string;
//   title1: string;
//   title2: string;
//   title3: string;
//   tagline: String;
//   para: String;
//   quote: string;
//   image: string;
//   linkedin: string;
//   customClass: String;
// }

// @Component({
//   selector: 'app-testimonials',
//   templateUrl: './testimonials.component.html',
//   styleUrls: ['./testimonials.component.scss']
// })
// export class TestimonialsComponent implements AfterViewInit, OnDestroy {
//   @ViewChild('carouselTrack') carouselTrack!: ElementRef;

//   currentSlide = 1;
//   autoSlideInterval: any;

//   testimonials: Testimonial[] = [
//     {
//       name: 'Kari Jones',
//       title: 'Talent Manager, Forbes',
//       title1: 'Talent Manager',
//       title2: 'Forbes',
//       title3: '',
//       tagline: `"Carrie is more than a coach or consultant - she is a light."`,
//       para: `Her strategic lens and executive presence challenge leaders to think bigger, lead bolder, and drive transformative results. 
      
//       For any enterprise committed to growth, alignment, and unlocking leadership capital — she’s the catalyst.`,
//       customClass: '',
//       quote: 'She is a sheer force that I am confident will make a serious impact on individuals and learning in corporations.',
//       image: 'assets/kari-jones.png',
//       linkedin: 'https://www.linkedin.com/in/kari-jones-e/'
//     },
//     {
//       name: 'Dr. Donald P. Addison',
//       title: 'Senior,Lecturer University of Georgia, Terry College of Business',
//       title1: 'Senior Lecturer',
//       title2: 'University of Georgia',
//       title3: 'Terry College of Business',
//       customClass: '',
//       tagline: `"Carrie’s track record in business development speaks for itself — she’s led multiple landmark deals.  What sets her apart is her strategic mindset and collaborative leadership."`,
//       para: 'She’s one of the rare senior leaders who can turn big thinking into measurable impact.',
//       quote: "Carrie's ability to translate vision into real business results has been instrumental in growing some of the industry’s largest client groups.  Known for her energy and dedication, Carrie develops high-performing teams and helps individuals reach their full potential.",
//       image: 'assets/donald.png',
//       linkedin: 'https://www.linkedin.com/in/donaldpaddisonii/'
//     },
//     {
//       name: 'Maggie Seidel',
//       title: 'EVP of External Affairs & Chief of Staff, Finseca',
//       title1: 'Executive Vice President of External Affairs',
//       title2: 'Chief of Staff',
//       title3: 'Finseca',
//       customClass: '',
//       tagline: `"Carrie Moore has been a transformative force in my leadership journey."`,
//       para: 'Carrie’s expertise and genuine passion for elevating others make her an exceptional advisor. I wholeheartedly recommend her to any leader ready to unlock their full potential.',
//       quote: 'Her strategic and tactical coaching helped me identify key growth areas and take clear, actionable steps forward. Through her deep listening and insightful questions, I gained clarity, confidence, and the ability to lead through complexity with ease.',
//       image: 'assets/maggie.png',
//       linkedin: 'https://www.linkedin.com/in/maggie-seidel-97345132/'
//     },
//     {
//       name: 'Kim Martin',

//       title: 'Digital Client Experience (CX) Leadership',
//       title1: 'Digital Client Experience',
//       title2: 'CX Leadership',
//       title3: '',
//       tagline: `"Carrie is more than a coach — she’s a catalyst.   My self-awareness has reached incredible levels. Through Carrie’s exercises, I became more decisive, compassionate, and perceptive."`,
//       para: `If you are ready to do the work, you will get more than development.  You will get a transformation.   Invest in yourself.  Trust me, you're worth it.`,
//       // customClass: 'long-para',
//       customClass: '',
//       quote: `Her mentorship over the past decade has transformed my career and personal growth. Today, I lead in the payments industry in NYC — a direct result of her belief in me before I believed in myself.`,
//       image: 'assets/kinmartin.png',
//       linkedin: 'https://www.linkedin.com/in/kim-martin/'
//     },
//     {
//       name: 'Shriya Vilemas',
//       title: 'Investor Services, Winton',
//       title1: 'Investor Relations',
//       title2: 'Winton',
//       title3: 'Abu Dhabi Emirate',
//       tagline: `"Carrie has an unparalleled ability to bring out the best in people, helping them unlock their strengths and step into their potential."`,
//       para: '',
//       customClass: '',
//       quote: 'Carrie is an exceptional leader and mentor.  Her ability to consistently bring out the best in people and identify their strengths is remarkable.  She is truly in a league of her own, and I look forward to following her success.',
//       image: 'assets/shriya.png',
//       linkedin: 'https://www.linkedin.com/in/shriya-vilemas-5babb1135/'
//     },
//     {
//       name: 'Ann Ruane ',
//       title: 'Senior Vice President, Merrill Lynch',
//       title1: 'Senior Portfolio Advisor',
//       title2: 'Comprehensive Wealth Strategist',
//       title3: 'Merrill Lynch',
//       tagline: `"Carrie helped me own my value, amplify my voice, and think bigger about growth. Working with her was the best investment I could have made."`,
//       para: 'The biggest shift? I now own my values and speak confidently about my strengths. Carrie brings insight, energy, and a rare ability to unlock potential.',
//       customClass: 'ChFC®, AWMA™, ADPA™',
//       quote: 'I’m a NY-based Senior Financial Advisor with 30 years of experience serving clients nationwide as a strategic partner and wealth strategist to Law Partners and C-Suite Executives.  Carrie helped me think bigger — using technology to create more opportunity with less effort.',
//       image: 'assets/ann.png',
//       linkedin: 'https://www.linkedin.com/in/annruane/'
//     },
//     {
//       name: 'Shannon Burch',
//       title: 'Vice President, Experience, Neo Financial',
//       title1: 'Chief Experience Officer',
//       title2: 'Leeg Group',
//       title3: '',
//       tagline: `"Carrie helped me redefine my leadership identity, giving me the confidence to step into C-suite and advocate for my true value."`,
//       para: `I’ve also gained the confidence to guide high-stakes conversations and share bold ideas with CEOs — even when they weren’t asking for them.
      
//       Carrie’s program offers clarity, connection, and a safe space to grow. If you’re ready to think differently and take control of your outcomes, this is the place to start.`,
//       customClass: '',
//       quote: 'Before working with Carrie, I had built a strong career across top financial institutions — but I hit a ceiling. The biggest shift was mindset: I now believe I belong in the C-Suite and deserve compensation that reflects my value.',
//       image: 'assets/shanon.png',
//       linkedin: 'https://www.linkedin.com/in/shannon-burch/'
//     },
//     {
//       name: 'Triné Alimena',
//       title: 'Head of US Cash, Liquidity & NA Balance Sheet Mgmt, BNP Paribas Corporate and Institutional Banking',
//       title1: 'Head of US Cash',
//       title2: 'Liquidity & NA Balance Sheet Mgmt',
//       title3: 'BNP Paribas Corporate & Institutional Banking',
//       tagline: `"Carrie leads with clarity, drives profitability, and inspires everyone around her - even beyond her own team."`,
//       para: '',
//       customClass: '',
//       quote: 'Carrie is an exceptional leader and business partner. Witnessing her ability to juggle organizational dynamics while staying focused on business profitability and empowering both teams and partners outside her direct organization is inspiring to those who work with her and for her.',
//       image: 'assets/trine.png',
//       linkedin: 'https://www.linkedin.com/in/triné-alimena-9a208632/'
//     },
//     {
//       name: 'Ken Hanson',
//       title: 'Product, Experimentation, and Growth Leadership, K2 Cyber',
//       title1: 'Product, Experimentation, & Growth Leadership',
//       title2: 'K2 Cyber',
//       title3: '',
//       tagline: `"Before going through this exercise I couldn’t see who I was meant to be. Now I feel so confident in my own skin."`,
//       para: 'Over five years, that guidance shaped not only my mindset but my reality — from the values we defined to the creative space we envisioned. Carrie’s influence has been subtle, powerful, and lasting.',
//       customClass: '',
//       quote: 'Working with Carrie has been foundational to my career. Her C-suite vision work aligned perfectly with my aspiration to help tech founders exceed their dreams.',
//       image: 'assets/kenhanson.png',
//       linkedin: 'https://www.linkedin.com/in/kenhanson/'
//     }
//   ];

//   ngAfterViewInit(): void {
//     this.updateCarousel();
//     this.startAutoSlide();
//   }

//   ngOnDestroy(): void {
//     if (this.autoSlideInterval) {
//       clearInterval(this.autoSlideInterval); // Clean up the interval when the component is destroyed
//     }
//   }

//   startAutoSlide(): void {
//     this.autoSlideInterval = setInterval(() => {
//       this.nextSlide(); // Move to the next slide every 5 seconds (5000 milliseconds)
//     }, 10000);
//   }

//   updateCarousel(): void {
//     if (!this.carouselTrack) return;

//     const track = this.carouselTrack.nativeElement as HTMLElement;
//     const cards = track.querySelectorAll('.testimonial-card');

//     // Remove active class from all cards
//     cards.forEach((card: Element) => card.classList.remove('active'));

//     // Add active class to the current slide
//     if (cards[this.currentSlide]) {
//       (cards[this.currentSlide] as HTMLElement).classList.add('active');
//     }

//     const activeCard = track.querySelector('.active') as HTMLElement | null;
//     if (!activeCard) return;

//     const containerWidth = track.parentElement?.offsetWidth || 0;
//     const cardWidth = activeCard.offsetWidth;
//     const cardOffset = activeCard.offsetLeft;
//     const targetPosition = (containerWidth / 2) - (cardWidth / 2) - cardOffset;

//     (track as HTMLElement).style.transform = `translateX(${targetPosition}px)`;
//   }

//   prevSlide(): void {
//     this.currentSlide = this.currentSlide === 0
//       ? this.testimonials.length - 1
//       : this.currentSlide - 1;
//     this.updateCarousel();
//   }

//   nextSlide(): void {
//     this.currentSlide = this.currentSlide === this.testimonials.length - 1
//       ? 0
//       : this.currentSlide + 1;
//     this.updateCarousel();
//   }

//   goToSlide(index: number): void {
//     this.currentSlide = index;
//     this.updateCarousel();
//   }

//   getDotArray(): number[] {
//     return Array(this.testimonials.length).fill(0).map((_, i) => i);
//   }
// }








import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';


interface Testimonial {
  name: string;
  title: string;
  title1: string;
  title2: string;
  title3: string;
  tagline: String;
  para: String;
  quote: string;
  image: string;
  linkedin: string;
  customClass: String;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  currentSlide = 1;
  autoSlideInterval: any;
  clonedFirstSlide: any;
  clonedLastSlide: any;

  
  testimonials: Testimonial[] = [
    {
      name: 'Kari Jones',
      title: 'Talent Manager, Forbes',
      title1: 'Talent Manager',
      title2: 'Forbes',
      title3: '',
      tagline: `"Carrie is more than a coach or consultant - she is a light."`,
      para: `Her strategic lens and executive presence challenge leaders to think bigger, lead bolder, and drive transformative results. 
      
      For any enterprise committed to growth, alignment, and unlocking leadership capital — she’s the catalyst.`,
      customClass: '',
      quote: 'She is a sheer force that I am confident will make a serious impact on individuals and learning in corporations.',
      image: 'assets/kari-jones.png',
      linkedin: 'https://www.linkedin.com/in/kari-jones-e/'
    },
    {
      name: 'Dr. Donald P. Addison',
      title: 'Senior,Lecturer University of Georgia, Terry College of Business',
      title1: 'Senior Lecturer',
      title2: 'University of Georgia',
      title3: 'Terry College of Business',
      customClass: '',
      tagline: `"Carrie’s track record in business development speaks for itself — she’s led multiple landmark deals.  What sets her apart is her strategic mindset and collaborative leadership."`,
      para: 'She’s one of the rare senior leaders who can turn big thinking into measurable impact.',
      quote: "Carrie's ability to translate vision into real business results has been instrumental in growing some of the industry’s largest client groups.  Known for her energy and dedication, Carrie develops high-performing teams and helps individuals reach their full potential.",
      image: 'assets/donald.png',
      linkedin: 'https://www.linkedin.com/in/donaldpaddisonii/'
    },
    {
      name: 'Maggie Seidel',
      title: 'EVP of External Affairs & Chief of Staff, Finseca',
      title1: 'Executive Vice President of External Affairs',
      title2: 'Chief of Staff',
      title3: 'Finseca',
      customClass: '',
      tagline: `"Carrie Moore has been a transformative force in my leadership journey."`,
      para: 'Carrie’s expertise and genuine passion for elevating others make her an exceptional advisor. I wholeheartedly recommend her to any leader ready to unlock their full potential.',
      quote: 'Her strategic and tactical coaching helped me identify key growth areas and take clear, actionable steps forward. Through her deep listening and insightful questions, I gained clarity, confidence, and the ability to lead through complexity with ease.',
      image: 'assets/maggie.png',
      linkedin: 'https://www.linkedin.com/in/maggie-seidel-97345132/'
    },
    {
      name: 'Kim Martin',

      title: 'Digital Client Experience (CX) Leadership',
      title1: 'Digital Client Experience',
      title2: 'CX Leadership',
      title3: '',
      tagline: `"Carrie is more than a coach — she’s a catalyst.   My self-awareness has reached incredible levels. Through Carrie’s exercises, I became more decisive, compassionate, and perceptive."`,
      para: `If you are ready to do the work, you will get more than development.  You will get a transformation.   Invest in yourself.  Trust me, you're worth it.`,
      // customClass: 'long-para',
      customClass: '',
      quote: `Her mentorship over the past decade has transformed my career and personal growth. Today, I lead in the payments industry in NYC — a direct result of her belief in me before I believed in myself.`,
      image: 'assets/kinmartin.png',
      linkedin: 'https://www.linkedin.com/in/kim-martin/'
    },
    {
      name: 'Shriya Vilemas',
      title: 'Investor Services, Winton',
      title1: 'Investor Relations',
      title2: 'Winton',
      title3: 'Abu Dhabi Emirate',
      tagline: `"Carrie has an unparalleled ability to bring out the best in people, helping them unlock their strengths and step into their potential."`,
      para: '',
      customClass: '',
      quote: 'Carrie is an exceptional leader and mentor.  Her ability to consistently bring out the best in people and identify their strengths is remarkable.  She is truly in a league of her own, and I look forward to following her success.',
      image: 'assets/shriya.png',
      linkedin: 'https://www.linkedin.com/in/shriya-vilemas-5babb1135/'
    },
    {
      name: 'Ann Ruane ',
      title: 'Senior Vice President, Merrill Lynch',
      title1: 'Senior Portfolio Advisor',
      title2: 'Comprehensive Wealth Strategist',
      title3: 'Merrill Lynch',
      tagline: `"Carrie helped me own my value, amplify my voice, and think bigger about growth. Working with her was the best investment I could have made."`,
      para: 'The biggest shift? I now own my values and speak confidently about my strengths. Carrie brings insight, energy, and a rare ability to unlock potential.',
      customClass: 'ChFC®, AWMA™, ADPA™',
      quote: 'I’m a NY-based Senior Financial Advisor with 30 years of experience serving clients nationwide as a strategic partner and wealth strategist to Law Partners and C-Suite Executives.  Carrie helped me think bigger — using technology to create more opportunity with less effort.',
      image: 'assets/ann.png',
      linkedin: 'https://www.linkedin.com/in/annruane/'
    },
    {
      name: 'Shannon Burch',
      title: 'Vice President, Experience, Neo Financial',
      title1: 'Chief Experience Officer',
      title2: 'Leeg Group',
      title3: '',
      tagline: `"Carrie helped me redefine my leadership identity, giving me the confidence to step into C-suite and advocate for my true value."`,
      para: `I’ve also gained the confidence to guide high-stakes conversations and share bold ideas with CEOs — even when they weren’t asking for them.
      
      Carrie’s program offers clarity, connection, and a safe space to grow. If you’re ready to think differently and take control of your outcomes, this is the place to start.`,
      customClass: '',
      quote: 'Before working with Carrie, I had built a strong career across top financial institutions — but I hit a ceiling. The biggest shift was mindset: I now believe I belong in the C-Suite and deserve compensation that reflects my value.',
      image: 'assets/shanon.png',
      linkedin: 'https://www.linkedin.com/in/shannon-burch/'
    },
    {
      name: 'Triné Alimena',
      title: 'Head of US Cash, Liquidity & NA Balance Sheet Mgmt, BNP Paribas Corporate and Institutional Banking',
      title1: 'Head of US Cash',
      title2: 'Liquidity & NA Balance Sheet Mgmt',
      title3: 'BNP Paribas Corporate & Institutional Banking',
      tagline: `"Carrie leads with clarity, drives profitability, and inspires everyone around her - even beyond her own team."`,
      para: '',
      customClass: '',
      quote: 'Carrie is an exceptional leader and business partner. Witnessing her ability to juggle organizational dynamics while staying focused on business profitability and empowering both teams and partners outside her direct organization is inspiring to those who work with her and for her.',
      image: 'assets/trine.png',
      linkedin: 'https://www.linkedin.com/in/triné-alimena-9a208632/'
    },
    {
      name: 'Ken Hanson',
      title: 'Product, Experimentation, and Growth Leadership, K2 Cyber',
      title1: 'Product, Experimentation, & Growth Leadership',
      title2: 'K2 Cyber',
      title3: '',
      tagline: `"Before going through this exercise I couldn’t see who I was meant to be. Now I feel so confident in my own skin."`,
      para: 'Over five years, that guidance shaped not only my mindset but my reality — from the values we defined to the creative space we envisioned. Carrie’s influence has been subtle, powerful, and lasting.',
      customClass: '',
      quote: 'Working with Carrie has been foundational to my career. Her C-suite vision work aligned perfectly with my aspiration to help tech founders exceed their dreams.',
      image: 'assets/kenhanson.png',
      linkedin: 'https://www.linkedin.com/in/kenhanson/'
    }
  ];

  ngAfterViewInit(): void {
    this.updateCarousel();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval); // Clean up the interval when the component is destroyed
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide(); // Move to the next slide every 10 seconds (10000 milliseconds)
    }, 10000);
  }

  updateCarousel(): void {
    if (!this.carouselTrack) return;

    const track = this.carouselTrack.nativeElement as HTMLElement;
    const cards = track.querySelectorAll('.testimonial-card');

    // Remove active class from all cards
    cards.forEach((card: Element) => card.classList.remove('active'));

    // Add active class to the current slide
    if (cards[this.currentSlide]) {
      (cards[this.currentSlide] as HTMLElement).classList.add('active');
    }

    const activeCard = track.querySelector('.active') as HTMLElement | null;
    if (!activeCard) return;

    const containerWidth = track.parentElement?.offsetWidth || 0;
    const cardWidth = activeCard.offsetWidth;
    const cardOffset = activeCard.offsetLeft;
    const targetPosition = (containerWidth / 2) - (cardWidth / 2) - cardOffset;

    (track as HTMLElement).style.transform = `translateX(${targetPosition}px)`;
  }

  // Function to loop through slides
  nextSlide(): void {
    // Check if we're at the last slide, then jump to the first slide
    if (this.currentSlide === this.testimonials.length - 1) {
      this.currentSlide = 0;
      this.updateCarousel();
      return; // To prevent jumping back during transition
    }

    this.currentSlide++;
    this.updateCarousel();
  }

  prevSlide(): void {
    // Check if we're at the first slide, then jump to the last slide
    if (this.currentSlide === 0) {
      this.currentSlide = this.testimonials.length - 1;
      this.updateCarousel();
      return; // To prevent jumping back during transition
    }

    this.currentSlide--;
    this.updateCarousel();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.updateCarousel();
  }

  getDotArray(): number[] {
    return Array(this.testimonials.length).fill(0).map((_, i) => i);
  }
}
