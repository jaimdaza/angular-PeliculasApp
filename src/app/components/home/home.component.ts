import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  ninos: any;

  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.getCarteleras().subscribe(resp => this.cartelera = resp);
    this.peliculasService.getPopulares().subscribe(resp => this.populares = resp);
    this.peliculasService.getPopularesNinos().subscribe(resp => this.ninos = resp);
  }

  ngOnInit(): void {
  }

}
