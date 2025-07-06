import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { NoticiasComponent } from './noticias/noticias';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, NoticiasComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'pagina-elaine';
}
