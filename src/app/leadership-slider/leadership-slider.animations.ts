import { trigger, state, style, transition, animate } from "@angular/animations"

export const slideAnimation = trigger("slideAnimation", [
  state(
    "inactive",
    style({
      opacity: 0,
      transform: "translateX(-100px)",
    }),
  ),
  state(
    "active",
    style({
      opacity: 1,
      transform: "translateX(0)",
    }),
  ),
  transition("inactive => active", animate("600ms ease-in")),
  transition("active => inactive", animate("600ms ease-out")),
])
