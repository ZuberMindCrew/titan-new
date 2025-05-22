// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CaseStudy } from '../shared/interfaces/case-study.interface';

// @Component({
//   selector: 'app-case-study',
//   templateUrl: './case-study.component.html',
//   styleUrls: ['./case-study.component.scss']
// })
// export class CaseStudyComponent {
//   caseStudies: CaseStudy[] = [
//     {
//       id: 1,
//       title: 'From Underperformance to Global Powerhouse',
//       subtitle: 'Tripling Revenue & Slashing Costs in 16 months',
//       heroImage: 'assets/global.jpg',
//       metrics: {
//         primary: { value: '3X', label: 'Revenue' },
//         secondary: { value: '23%', label: 'Reduces Expenses' }
//       },
//       clientOverview: [
//         '$3T in assets, serving middle-market companies ($50M-$2B revenue)',
//         'Leading provider of lending, treasury management, and liquidity solutions.',
//         'Skill gaps across teams slowing execution'
//       ],
//       challenges: [
//         'Fragmented business development and declining portfolio performance.',
//         'Leadership misalignment and poor communication.',
//         'Skill gaps across teams slowing execution'
//       ],
//       actions: [
//         'Reorganized leadership structure for clarity and alignment.',
//         'Overhauled pricing strategy to drive profitability',
//         'Launched a national onboarding program to upskill teams and boost execution'
//       ],
//       results: [
//         { percentage: '23%', description: 'reduction in expenses with greater efficiency' },
//         { percentage: '3X', description: 'revenue growth year-over-year' },
//         { percentage: '', description: 'Liquidity profitability improved by 1k+ bps' },
//         { percentage: '', description: 'Division became #1 globally, outperforming three regions combined' },
//         { percentage: '', description: 'Created sustained growth with engaged, high-performing teams' }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Fast-Tracking Growth Asset Manager',
//       subtitle: 'Scaling Operations and Recruiting Top Talent',
//       heroImage: 'assets/coin.jpg',
//       metrics: {
//         primary: { value: '20%', label: 'Increased Product Adoption' },
//         secondary: { value: '$600M', label: 'AUM Growth' }
//       },
//      clientOverview: [
//         '$3T in assets, serving middle-market companies ($50M-$2B revenue)',
//         'Leading provider of lending, treasury management, and liquidity solutions.',
//         'Skill gaps across teams slowing execution'
//       ],
//       challenges: [
//         'Fragmented business development and declining portfolio performance.',
//         'Leadership misalignment and poor communication.',
//         'Skill gaps across teams slowing execution'
//       ],
//       actions: [
//         'Reorganized leadership structure for clarity and alignment.',
//         'Overhauled pricing strategy to drive profitability',
//         'Launched a national onboarding program to upskill teams and boost execution'
//       ],
//       results: [
//         { percentage: '23%', description: 'reduction in expenses with greater efficiency' },
//         { percentage: '3X', description: 'revenue growth year-over-year' },
//         { percentage: '', description: 'Liquidity profitability improved by 1k+ bps' },
//         { percentage: '', description: 'Division became #1 globally, outperforming three regions combined' },
//         { percentage: '', description: 'Created sustained growth with engaged, high-performing teams' }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Building A High-Performance Engine',
//       subtitle: 'Team, Execution & Double-Digit Revenue Growth',
//       heroImage: 'assets/peop.jpg',
//       metrics: {
//         primary: { value: '30%', label: 'Division Growth' },
//         secondary: { value: '21%', label: 'Revenue Growth via Operations' }
//       },
//       clientOverview: [
//         '$3T in assets, serving middle-market companies ($50M-$2B revenue)',
//         'Leading provider of lending, treasury management, and liquidity solutions.',
//         'Skill gaps across teams slowing execution'
//       ],
//       challenges: [
//         'Fragmented business development and declining portfolio performance.',
//         'Leadership misalignment and poor communication.',
//         'Skill gaps across teams slowing execution'
//       ],
//       actions: [
//         'Reorganized leadership structure for clarity and alignment.',
//         'Overhauled pricing strategy to drive profitability',
//         'Launched a national onboarding program to upskill teams and boost execution'
//       ],
//       results: [
//         { percentage: '23%', description: 'reduction in expenses with greater efficiency' },
//         { percentage: '3X', description: 'revenue growth year-over-year' },
//         { percentage: '', description: 'Liquidity profitability improved by 1k+ bps' },
//         { percentage: '', description: 'Division became #1 globally, outperforming three regions combined' },
//         { percentage: '', description: 'Created sustained growth with engaged, high-performing teams' }
//       ]
//     },
//     {
//       id: 4,
//       title: 'From APAC Leader to US Lending Force',
//       subtitle: '$10M Capital Raised, Risk Reduced, Market Captured',
//       heroImage: 'assets/mobilee.png',
//       metrics: {
//         primary: { value: '$10M', label: 'Capital Raised' },
//         secondary: { value: '18 Months', label: 'Operations Launch' }
//       },
//       clientOverview: [
//         '$3T in assets, serving middle-market companies ($50M-$2B revenue)',
//         'Leading provider of lending, treasury management, and liquidity solutions.',
//         'Skill gaps across teams slowing execution'
//       ],
//       challenges: [
//         'Fragmented business development and declining portfolio performance.',
//         'Leadership misalignment and poor communication.',
//         'Skill gaps across teams slowing execution'
//       ],
//       actions: [
//         'Reorganized leadership structure for clarity and alignment.',
//         'Overhauled pricing strategy to drive profitability',
//         'Launched a national onboarding program to upskill teams and boost execution'
//       ],
//       results: [
//         { percentage: '23%', description: 'reduction in expenses with greater efficiency' },
//         { percentage: '3X', description: 'revenue growth year-over-year' },
//         { percentage: '', description: 'Liquidity profitability improved by 1k+ bps' },
//         { percentage: '', description: 'Division became #1 globally, outperforming three regions combined' },
//         { percentage: '', description: 'Created sustained growth with engaged, high-performing teams' }
//       ]
//     }
//   ];

//   constructor(private router: Router) {}

//   navigateToCaseStudy(caseStudy: CaseStudy) {
//     localStorage.setItem('selectedCaseStudy', JSON.stringify(caseStudy));
//     this.router.navigate(['/case-study', caseStudy.id]);
//   }
// }



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseStudy } from '../shared/interfaces/case-study.interface';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {

  imageLoaded = false;

  ngOnInit() {
    // Optional: You can add a timeout to ensure spinner shows for minimum time
    setTimeout(() => {
      const img = new Image();
      img.src = 'assets/areoplane.jpg';
      img.onload = () => {
        this.imageLoaded = true;
      };
    }, 0);
  }

  caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'From Underperformance to Global Powerhouse',
      subtitle: 'Tripling Revenue & Slashing Costs in 16 months',
      heroImage: 'assets/global.jpg',
      tagLine:'Global Financial Services Client',
      tagLine2:'$3T+ in assets | Serving $50M–$2B middle-market companies',
      metrics: {
        primary: { value: '3X', label: 'Revenue' },
        secondary: { value: '23%', label: 'Reduces Expenses' }
      },
      clientOverview: [
        'Leading provider of lending, treasury management, and liquidity solutions',
        'Skill gaps across teams slowing execution'
      ],
      challenges: [
        'Fragmented business development and declining portfolio performance',
        'Leadership misalignment and poor communication',
        'Skill gaps across teams slowing execution'
      ],
      actions: [
        'Reorganized leadership structure for clarity and alignment',
        'Overhauled pricing strategy to drive profitability',
        'Launched a national onboarding program to upskill teams and boost execution'
      ],
      results: [
        { percentage: '23%', description: 'Reduction in expenses with greater efficiency' },
        { percentage: '3X', description: 'Revenue growth year-over-year' },
        { percentage: '', description: 'Liquidity profitability improved by 1k+ bps' },
        { percentage: '', description: 'Division became #1 globally, outperforming three regions combined' },
        { percentage: '', description: 'Created sustained growth with engaged, high-performing teams' }
      ]
    },
    {
      id: 2,
      title: 'Fast-Tracking Growth Asset Manager',
      subtitle: 'Scaling Operations and Recruiting Top Talent',
      heroImage: 'assets/coin.jpg',
      tagLine:'Asset Management Client',
      tagLine2:'$500M+ AUM | Growth-stage firm scaling operations and recruiting elite talent',
      metrics: {
        primary: { value: '20%', label: 'Increased Product Adoption' },
        secondary: { value: '$600M', label: 'AUM Growth in 7 months' }
      },
     clientOverview: [
        'AUM: $500M+ | Scaling asset management firm transitioning for growth',
        'Required leadership alignment, GTM strategy, and elite FA recruitment'
      ],
      challenges: [
        'Misaligned leadership and unclear capital strategy',
        'No scalable GTM or financial advisor (FA) recruitment system',
        'Weak market presence and stalled growth'
      ],
      actions: [
        'Rebuilt leadership and go-to-market strategy to restore credibility',
        'Launched scalable FA onboarding, increasing success rates by 33%',
        'Introduced peer-driven sponsor model to boost product adoption and speed up business development'
      ],
      results: [
        { percentage: '$600M AUM added', description: 'through FA recruitment in just 7 months' },
        { percentage: '20% Increase', description: 'in investment product adoption' },
        { percentage: '', description: 'Positioned the firm for long-term scale with a faster growth trajectory' },
      ]
    },
    {
      id: 3,
      title: 'Building A High-Performance Engine',
      subtitle: 'Team, Execution & Double-Digit Revenue Growth',
      heroImage: 'assets/peop.jpg',
      tagLine:'Global Insurance and Property Casualty Client',
      tagLine2:'6k+ employees | Operating across the US, Canada, and Europe',
      metrics: {
        primary: { value: '30%', label: 'Division Growth' },
        secondary: { value: '21%', label: 'Revenue Growth via Operations' }
      },
      clientOverview: [
        'Leading national insurance brokerage operating across the US, Canada & Europe',
        '6k+ employees, recognized industry leader.',
        'Offers P&C, corporate benefits, retirement solutions & individual client services  '
      ],
      challenges: [
        'Fragmented GTM strategy, causing stalled growth',
        'Operational inefficiencies limiting revenue',
        'Leadership performance inconsistency across teams'
      ],
      actions: [
        'Designed a focused go-to-market strategy to drive scalable growth',
        'Built a structured operating model to boost execution and productivity',
        'Delivered targeted coaching to elevate leadership and team performance'
      ],
      results: [
        { percentage: '30%', description: 'Faster growth and 21% revenue increase' },
        { percentage: '', description: '25% Boost in productivity; 36%+ performance gains in 3 months, rising to 42% in 6 months' },
        { percentage: '', description: 'Built a foundation for consistent execution and sustained momentum' },
      ]
    },
    {
      id: 4,
      title: 'From APAC Leader to US Lending Force',
      subtitle: '$10M Capital Raised, Risk Reduced, Market Captured',
      heroImage: 'assets/mobilee.png',
      tagLine:'Asia-Pacific Fintech | Entering US Commercial Lending Market',
      tagLine2:'Proven in digital finance, expanding into US commercial lending',
      metrics: {
        primary: { value: '$10M', label: 'Capital Raised' },
        secondary: { value: '18 Months', label: 'Operations Launch' }
      },
      clientOverview: [
        'Fastest-growing Asia-Pacific fintech, backed by top-tier investors',
        'Proven in digital finance, expanding into US commercial lending',
        'Parent Company had limited US market, regulatory, and debt structuring experience'
      ],
      challenges: [
        'US market unfamiliarity, compliance gaps, and platform readiness delays',
        'Needed a scalable GTM strategy to manage lending risk',
        'Limited US regulatory and debt structuring expertise'
      ],
      actions: [
        'Built and launched a US lending platform with a 12-state expansion roadmap',
        'Developed a compliant GTM strategy aligned to reduce lending risk and improve returns',
        'Secured fintech legal partnerships and recruited top US credit, risk, and governance leaders'
      ],
      results: [
        { percentage: '$10M', description: 'Capital raise and full operational launch in under 18 months' },
        { percentage: '', description: 'Positioned as a market-ready US lender with a scalable, compliant platform' },
        { percentage: '', description: 'Accelerated US growth with strong investor confidence' },
       
      ]
    }
  ];

  constructor(private router: Router) {}

  navigateToCaseStudy(caseStudy: CaseStudy) {
    localStorage.setItem('selectedCaseStudy', JSON.stringify(caseStudy));
    this.router.navigate(['/case-study', caseStudy.id]);
  }
}

