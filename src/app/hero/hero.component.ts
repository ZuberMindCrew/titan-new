import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  serviceAreas = [
    { index: 0, number: "01.", title: "C-Suite Alignment", active: false },
    { index: 1, number: "02.", title: "Market Expansion", active: true },
    { index: 2, number: "03.", title: "Change Management", active: false },
    { index: 3, number: "04.", title: "Communications", active: false },
    { index: 4, number: "05.", title: "Organizational Performance", active: false },
  ];

  currentIndex = 1;
  cycleInterval: any;

  constructor() {}

  ngOnInit() {
    this.cycleInterval = setInterval(() => this.cycleServiceAreas(), 5000);
  }

  ngOnDestroy() {
    if (this.cycleInterval) {
      clearInterval(this.cycleInterval);
    }
  }

  cycleServiceAreas() {
    this.serviceAreas.forEach((area) => (area.active = false));
    this.currentIndex = (this.currentIndex + 1) % this.serviceAreas.length;
    this.serviceAreas[this.currentIndex].active = true;
  }

  setActiveArea(index: number) {
    this.serviceAreas.forEach((area) => (area.active = false));
    this.serviceAreas[index].active = true;
    this.currentIndex = index;

    if (this.cycleInterval) {
      clearInterval(this.cycleInterval);
    }
    this.cycleInterval = setInterval(() => this.cycleServiceAreas(), 5000);
  }
}
