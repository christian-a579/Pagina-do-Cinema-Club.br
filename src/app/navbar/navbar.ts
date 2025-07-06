import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // Fechar menu quando clicar fora
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar')) {
      this.closeMenu();
    }
  }

  // Fechar menu ao pressionar ESC
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }
}
