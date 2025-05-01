import { Component } from "@angular/core"

@Component({
  selector: "app-why-titan",
  templateUrl: "./why-titan.component.html",
  styleUrls: ["./why-titan.component.scss"],
})
export class WhyTitanComponent {
  globalBusinessRegions = ["North America", "South/Latin America", "Asia-Pacific", "Europe", "Middle East"]

  coreExpertise = [
    "Business Strategy",
    "Strategic Communications",
    "Organizational Development",
    "Human Capital Development",
    "Professional Services",
    "Capital Strategy",
  ]

  industries = [
    "Financial Services",
    "Technology",
    "Energy & Power",
    "Brokerage/Advisory",
    "Venture Capital/Private Equity",
    "Public Sector",
  ]
}
