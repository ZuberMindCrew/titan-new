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
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/BP_logo.svg/1200px-BP_logo.svg.png",
    },
    {
      name: "Swift",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/SWIFT_logo.svg/1200px-SWIFT_logo.svg.png",
    },
    {
      name: "ConocoPhillips",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ConocoPhillips_logo.svg/2560px-ConocoPhillips_logo.svg.png",
    },
    {
      name: "Merrill Lynch",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Merrill_Lynch_logo.svg/2560px-Merrill_Lynch_logo.svg.png",
    },
    {
      name: "AEGON",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aegon_logo.svg/2560px-Aegon_logo.svg.png",
    },
    {
      name: "HSBC",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1200px-HSBC_logo_%282018%29.svg.png",
    },
  ]

  // Duplicate logos for seamless infinite scroll
  extendedLogos: any[] = []

  ngOnInit() {
    // Create an extended array with duplicated logos for seamless scrolling
    this.extendedLogos = [...this.logos, ...this.logos]
  }
}
