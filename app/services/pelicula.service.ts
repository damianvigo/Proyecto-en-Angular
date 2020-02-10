import { Injectable } from '@angular/core'; /* injectable aplica un decorador a la clase entonces no hace falta hacer hacer new */
import { Pelicula } from '../models/pelicula'; // para utilizar el objeto

@Injectable() // Decorador para indicar que es un servicio
export class PeliculaService {
  
  public peliculas: Pelicula[];

  constructor() {
    this.peliculas = [
      new Pelicula('Spiderman 4', 2019, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2013/03/213474-sam-raimi-explica-cancelacion-spiderman-4.jpg?itok=EwwQiV1r'),
      new Pelicula('Los vengadores Endgame', 2018, 'https://as.com/tikitakas/imagenes/2019/04/06/portada/1554566621_000164_1554566834_noticia_normal.jpg'),
      new Pelicula('Batman vs Superman', 2015, 'https://img.europapress.es/fotoweb/fotonoticia_20160330114256_800.jpg'),
      new Pelicula('Gladiador', 2011, 'https://www.infobae.com/new-resizer/fC0EosbQCKsDMTFzlQzBVAAjfPE=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/08/14082240/Gladiador-2.jpg'),  
    ];
  }

  holaMundo() {
    return 'Hola mundo desde un servicio de angular!';
  }

  getPeliculas() {
    return this.peliculas;
  }
}