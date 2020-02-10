import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula'; // cargar el modelo de pelicula
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck {

  public titulo: string;
  public peliculas: Pelicula[]; // tipo de dato Pelicula
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService /* _ siempre se pone cuando se crea una propiedad dentro de una clase de un componente que esta vinculado a un servicio */
  ) {
    this.titulo = 'Componente peliculas';
    this.peliculas = this._peliculaService.getPeliculas(); // utilizo el servicio que me provee las peliculas
    this.fecha = new Date(2020, 0, 20)
   }
  
  ngOnInit() {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck() {

  }

  cambiarTitulo() {
    this.titulo = 'El titulo ha sido cambiado';
  }

  ngOnDestroy() {
    console.log('El COMPONENTE SE VA A ELIMINAR');
  }

  mostrarFavorita(event) {
   this.favorita = event.pelicula;
  }


}
