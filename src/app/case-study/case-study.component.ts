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
      metrics: {
        primary: { value: '3X', label: 'Revenue' },
        secondary: { value: '23%', label: 'Reduces Expenses' }
      },
      clientOverview: [
        '$3T in assets, serving middle-market companies ($50M-$2B revenue)',
        'Leading provider of lending, treasury management, and liquidity solutions.',
        'Skill gaps across teams slowing execution'
      ],
      challenges: [
        'Fragmented business development and declining portfolio performance.',
        'Leadership misalignment and poor communication.',
        'Skill gaps across teams slowing execution'
      ],
      actions: [
        'Reorganized leadership structure for clarity and alignment.',
        'Overhauled pricing strategy to drive profitability',
        'Launched a national onboarding program to upskill teams and boost execution'
      ],
      results: [
        { percentage: '23%', description: 'reduction in expenses with greater efficiency' },
        { percentage: '3X', description: 'revenue growth year-over-year' },
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
      metrics: {
        primary: { value: '20%', label: 'Increased Product Adoption' },
        secondary: { value: '$600M', label: 'AUM Growth' }
      },
     clientOverview: [
        '$3T in assets, serving middle-market companies ($50M-$2B revenue)',
        'Leading provider of lending, treasury management, and liquidity solutions.',
        'Skill gaps across teams slowing execution'
      ],
      challenges: [
        'Fragmented business development and declining portfolio performance.',
        'Leadership misalignment and poor communication.',
        'Skill gaps across teams slowing execution'
      ],
      actions: [
        'Reorganized leadership structure for clarity and alignment.',
        'Overhauled pricing strategy to drive profitability',
        'Launched a national onboarding program to upskill teams and boost execution'
      ],
      results: [
        { percentage: '23%', description: 'reduction in expenses with greater efficiency' },
        { percentage: '3X', description: 'revenue growth year-over-year' },
        { percentage: '', description: 'Liquidity profitability improved by 1k+ bps' },
        { percentage: '', description: 'Division became #1 globally, outperforming three regions combined' },
        { percentage: '', description: 'Created sustained growth with engaged, high-performing teams' }
      ]
    },
    {
      id: 3,
      title: 'Building A High-Performance Engine',
      subtitle: 'Team, Execution & Double-Digit Revenue Growth',
      heroImage: 'assets/peop.jpg',
      metrics: {
        primary: { value: '30%', label: 'Division Growth' },
        secondary: { value: '21%', label: 'Revenue Growth via Operations' }
      },
      clientOverview: [
        '$3T in assets, serving middle-market companies ($50M-$2B revenue)',
        'Leading provider of lending, treasury management, and liquidity solutions.',
        'Skill gaps across teams slowing execution'
      ],
      challenges: [
        'Fragmented business development and declining portfolio performance.',
        'Leadership misalignment and poor communication.',
        'Skill gaps across teams slowing execution'
      ],
      actions: [
        'Reorganized leadership structure for clarity and alignment.',
        'Overhauled pricing strategy to drive profitability',
        'Launched a national onboarding program to upskill teams and boost execution'
      ],
      results: [
        { percentage: '23%', description: 'reduction in expenses with greater efficiency' },
        { percentage: '3X', description: 'revenue growth year-over-year' },
        { percentage: '', description: 'Liquidity profitability improved by 1k+ bps' },
        { percentage: '', description: 'Division became #1 globally, outperforming three regions combined' },
        { percentage: '', description: 'Created sustained growth with engaged, high-performing teams' }
      ]
    },
    {
      id: 4,
      title: 'From APAC Leader to US Lending Force',
      subtitle: '$10M Capital Raised, Risk Reduced, Market Captured',
      heroImage: 'assets/mobilee.png',
      metrics: {
        primary: { value: '$10M', label: 'Capital Raised' },
        secondary: { value: '18 Months', label: 'Operations Launch' }
      },
      clientOverview: [
        '$3T in assets, serving middle-market companies ($50M-$2B revenue)',
        'Leading provider of lending, treasury management, and liquidity solutions.',
        'Skill gaps across teams slowing execution'
      ],
      challenges: [
        'Fragmented business development and declining portfolio performance.',
        'Leadership misalignment and poor communication.',
        'Skill gaps across teams slowing execution'
      ],
      actions: [
        'Reorganized leadership structure for clarity and alignment.',
        'Overhauled pricing strategy to drive profitability',
        'Launched a national onboarding program to upskill teams and boost execution'
      ],
      results: [
        { percentage: '23%', description: 'reduction in expenses with greater efficiency' },
        { percentage: '3X', description: 'revenue growth year-over-year' },
        { percentage: '', description: 'Liquidity profitability improved by 1k+ bps' },
        { percentage: '', description: 'Division became #1 globally, outperforming three regions combined' },
        { percentage: '', description: 'Created sustained growth with engaged, high-performing teams' }
      ]
    }
  ];

  constructor(private router: Router) {}

  navigateToCaseStudy(caseStudy: CaseStudy) {
    localStorage.setItem('selectedCaseStudy', JSON.stringify(caseStudy));
    this.router.navigate(['/case-study', caseStudy.id]);
  }
}

