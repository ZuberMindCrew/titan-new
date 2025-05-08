import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CaseStudy } from '../shared/interfaces/case-study.interface';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent {
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
        { percentage: '23%', description: 'Reduction in expenses with greater efficiency' },
        { percentage: '23%', description: 'Reduction in expenses with greater efficiency' },
        { percentage: '23%', description: 'Reduction in expenses with greater efficiency' },
        { percentage: '23%', description: 'Reduction in expenses with greater efficiency' }
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
        'Leading asset management firm',
        'Focus on institutional investors',
        'Rapid growth phase'
      ],
      challenges: [
        'Scaling operations efficiently',
        'Talent acquisition and retention',
        'Process optimization needed'
      ],
      actions: [
        'Implemented new operational framework',
        'Developed talent acquisition strategy',
        'Streamlined key processes'
      ],
      results: [
        { percentage: '20%', description: 'Increase in operational efficiency' },
        { percentage: '600M', description: 'Assets under management growth' },
        { percentage: '30%', description: 'Improvement in talent retention' },
        { percentage: '25%', description: 'Reduction in processing time' }
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
        'Multi-division corporation',
        'Focus on operational excellence',
        'Growth-oriented objectives'
      ],
      challenges: [
        'Team performance issues',
        'Execution bottlenecks',
        'Revenue growth stagnation'
      ],
      actions: [
        'Implemented performance management system',
        'Streamlined execution processes',
        'Developed revenue growth strategies'
      ],
      results: [
        { percentage: '30%', description: 'Division growth achieved' },
        { percentage: '21%', description: 'Revenue growth through operations' },
        { percentage: '40%', description: 'Improvement in team performance' },
        { percentage: '35%', description: 'Reduction in bottlenecks' }
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
        'APAC market leader',
        'US market expansion focus',
        'Lending operations'
      ],
      challenges: [
        'Market entry barriers',
        'Risk management',
        'Capital requirements'
      ],
      actions: [
        'Developed market entry strategy',
        'Implemented risk framework',
        'Secured capital funding'
      ],
      results: [
        { percentage: '10M', description: 'Capital raised successfully' },
        { percentage: '18', description: 'Month successful launch period' },
        { percentage: '45%', description: 'Market share captured' },
        { percentage: '30%', description: 'Risk reduction achieved' }
      ]
    }
  ];

  constructor(private router: Router) {}

  navigateToCaseStudy(caseStudy: CaseStudy) {
    localStorage.setItem('selectedCaseStudy', JSON.stringify(caseStudy));
    this.router.navigate(['/case-study', caseStudy.id]);
  }
}
