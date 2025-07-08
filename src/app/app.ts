import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { NoticiasComponent } from './noticias/noticias';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, NoticiasComponent, BoasVindasComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'pagina-elaine';
}
