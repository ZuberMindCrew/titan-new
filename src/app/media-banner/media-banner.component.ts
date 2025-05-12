import { Component } from '@angular/core';

@Component({
  selector: 'app-media-banner',
  templateUrl: './media-banner.component.html',
  styleUrls: ['./media-banner.component.scss']
})
export class MediaBannerComponent {
  mediaLogos = [
    "assets/abc.png",
    "assets/cor.png",
    "https://logos-world.net/wp-content/uploads/2023/04/Financial-Times-Logo.png",
    "https://static.cdnlogo.com/logos/f/42/forbes.png",
    "assets/nbc.png",
    "assets/wsj.png",
    "assets/miami.png",
    "assets/SHRM.png"
  ]
}
