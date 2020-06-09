import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresa = '';
  busqueda = '';

  constructor(public peliculasService: PeliculasService,
              public router: ActivatedRoute) {
             this.router.params.subscribe(parametros => {
             this.peliculasService.getBuscarId(parametros.id).subscribe(pelicula =>
              this.pelicula = pelicula);
             this.regresa = parametros.pag;
             if (parametros.busqueda){
                this.busqueda = parametros.busqueda;
              }
            });
    }

  ngOnInit(): void {
  }

}
