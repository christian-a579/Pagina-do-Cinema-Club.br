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
  noticias: string[] = [];
  imagemAtual = 0;
  intervalo: any;

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.noticiasService.getNoticias().subscribe((dados) => {
      this.noticias = dados.imagens || [];
    });
  }

  ngOnDestroy() {}
}
