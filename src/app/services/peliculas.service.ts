import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '8d98b68027f11b1577060faa152601c7';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];


  constructor(private http: HttpClient) { }

  getCarteleras(){
    let desde = new Date();
    let hasta = new Date();
    desde.setDate(hasta.getDate() - 7);
    let desdeStr = `${desde.getFullYear()}-${this.agregarCero(desde.getMonth() + 1)}-${this.agregarCero(desde.getDate())}`;
    let hastaStr = `${hasta.getFullYear()}-${this.agregarCero(hasta.getMonth() + 1)}-${this.agregarCero(hasta.getDate())}`;
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apikey }&language=ES`;
    return this.http.get(url).pipe(map(data => data['results']));
  }


  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get(url).pipe(map(data => data['results']));
  }

  getPopularesNinos() {
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=ES&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get(url).pipe(map(data => data['results']));
  }

  buscarPelicula( texto: string){
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get( url).pipe(map(data => {
      this.peliculas = data['results'];
      console.log(data['results']);
      return data['results'];
    }));
  }

  getBuscarId(id: string) {
    const url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=ES`;
    return this.http.get(url).pipe(map(data => data));
  }

 private agregarCero(numero: number){
    if (numero < 10) {
    return '0' + numero;
    }else{
      return numero;
    }
  }
}
