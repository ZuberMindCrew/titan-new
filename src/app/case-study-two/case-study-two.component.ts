import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseStudy } from '../shared/interfaces/case-study.interface';

@Component({
  selector: 'app-case-study-two',
  templateUrl: './case-study-two.component.html',
  styleUrls: ['./case-study-two.component.scss']
})
export class CaseStudyTwoComponent implements OnInit {
  caseStudy: CaseStudy | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const storedCaseStudy = localStorage.getItem('selectedCaseStudy');
    if (storedCaseStudy) {
      this.caseStudy = JSON.parse(storedCaseStudy);
    }
  }
}
