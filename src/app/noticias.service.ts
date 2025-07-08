import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private http: HttpClient) {}

  getNoticias() {
    return this.http.get<{
      noticias: string[];
      imagens: string[];
      links: string[];
    }>('http://localhost:3000/api/conteudo');
  }
}
