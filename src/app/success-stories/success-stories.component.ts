import { Component } from "@angular/core"

@Component({
  selector: "app-success-stories",
  templateUrl: "./success-stories.component.html",
  styleUrls: ["./success-stories.component.scss"],
})
export class SuccessStoriesComponent {
  statistics = [
    {
      percentage: "30%",
      description: "Faster GTM Growth",
      variant: "gray",
    },
    {
      percentage: "25%",
      description: "Boost In Productivity",
      subtext: "(3 mo)",
      variant: "beige",
    },
    {
      percentage: "42%",
      description: "Increase In Performance",
      subtext: "(6 mo)",
      variant: "gray",
    },
    {
      percentage: "36%",
      description: "Avg Revenue Growth Through Up-Skilling",
      variant: "beige",
    },
    {
      percentage: "22-63%",
      description: "Increase Total Compensation",
      variant: "gray",
    },
  ]
}
