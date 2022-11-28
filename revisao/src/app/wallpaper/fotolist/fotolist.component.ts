import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallpaper } from '../wallpaper.model';

@Component({
  selector: 'rev-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {

  imagens: Wallpaper[] = [];

//Injeção de dependencia é quando solicitamos uma ferramenta
//Toda injeção de dependencia deve ser feita no () parenteses do construtor
//Toda ferramenta precisa de alguém para usá-la (ex: esse alguém é a variavel http)
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get<Wallpaper[]>('http://localhost:3000/imagens').subscribe(caixa => this.imagens = caixa);
  }

}


