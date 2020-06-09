import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  buscar: string;
  peliculas: any;

  constructor(public peliculasService: PeliculasService,
              public router: ActivatedRoute) {
this.router.params.subscribe(parametros => {
  if (parametros.texto){
    this.buscar = parametros.texto;
    this.buscarPelicula();
  }
});

              }

  ngOnInit(): void {
  }

  buscarPelicula(){
    if (this.buscar.length > 0){
      this.peliculasService.buscarPelicula(this.buscar).subscribe(resp => this.peliculas = resp);
     // this.buscar = '';
  }
  }

}
