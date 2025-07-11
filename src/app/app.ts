import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, BoasVindasComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'pagina-elaine';
}
