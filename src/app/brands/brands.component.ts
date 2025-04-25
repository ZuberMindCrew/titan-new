import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  logos = [
    {
      name: "BP",
      url: "assets/a-Photoroom.png",
    },
    {
      name: "Swift",
      url: "assets/b-Photoroom.png",
    },
    {
      name: "ConocoPhillips",
      url: "assets/c-Photoroom.png",
    },
    {
      name: "Merrill Lynch",
      url: "assets/d-Photoroom.png",
    },
    {
      name: "AEGON",
      url: "assets/e-Photoroom.png",
    },
    {
      name: "HSBC",
      url: "assets/f-Photoroom.png",
    },
    {
      name: "HSBC",
      url: "assets/g-Photoroom.png",
    },
    {
      name: "HSBC",
      url: "assets/h-Photoroom.png",
    },
    {
      name: "HSBC",
      url: "assets/i-Photoroom.png",
    },
    {
      name: "HSBC",
      url: "assets/gg-Photoroom.png",
    },
  ]

  // Duplicate logos for seamless infinite scroll
  extendedLogos: any[] = []

  ngOnInit() {
    // Create an extended array with duplicated logos for seamless scrolling
    this.extendedLogos = [...this.logos, ...this.logos]
  }
}
