import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false
  isMobileMenuOpen = false

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
    document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "auto"
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false
    document.body.style.overflow = "auto"
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    const mobileMenu = document.querySelector(".mobile-menu")
    const hamburger = document.querySelector(".hamburger")

    if (
      this.isMobileMenuOpen &&
      mobileMenu &&
      hamburger &&
      !mobileMenu.contains(event.target as Node) &&
      !hamburger.contains(event.target as Node)
    ) {
      this.closeMobileMenu()
    }
  }
}
