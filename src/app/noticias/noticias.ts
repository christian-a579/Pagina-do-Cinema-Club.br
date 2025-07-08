import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit, OnDestroy {
  noticias: { titulo: string; imagem: string; link?: string }[] = [];
  imagemAtual = 0;
  intervalo: any;

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.noticiasService.getNoticias().subscribe((dados) => {
      console.log(dados); // Veja o que chega aqui!
      this.noticias = dados.noticias.map((titulo: string, i: number) => ({
        titulo,
        imagem: dados.imagens[i],
        link: dados.links ? dados.links[i] : undefined,
      }));
    });
  }

  ngOnDestroy() {
    // Implemente a lógica para limpar o intervalo quando o componente for destruído
  }
}
