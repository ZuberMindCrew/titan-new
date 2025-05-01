import { Component } from "@angular/core"

@Component({
  selector: "app-strategic-outlook",
  templateUrl: "./strategic-outlook.component.html",
  styleUrls: ["./strategic-outlook.component.scss"],
})
export class StrategicOutlookComponent {
  challenges = [
    {
      title: "Misaligned Leadership Teams",
      description: "Causing slow execution and poor performance",
      variant: "gray",
    },
    {
      title: "Scaling Challenges",
      description: "that expose skill gaps and operational inefficiencies",
      variant: "beige",
    },
    {
      title: "Change Resistance",
      description: "when adopting new technology or restructuring",
      variant: "gray",
    },
    {
      title: "Fragmented Efforts",
      description: "Impacting the bottom line and brand experience",
      variant: "beige",
    },
  ]
}
