import { Component, type OnInit } from "@angular/core"

@Component({
  selector: "app-services-section",
  templateUrl: "./services-section.component.html",
  styleUrls: ["./services-section.component.scss"],
})
export class ServicesSectionComponent implements OnInit {
  ngOnInit() {
    // Preload images for better performance
    const preloadImages = ["assets/images/conference-table.png", "assets/images/executives-meeting.png"]

    preloadImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }
}
