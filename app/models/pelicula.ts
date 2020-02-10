export class Pelicula {
  /* 
  public title: string;
  public year: number;
  public image: string;

  constructor(title, year, image) {
    this.title = title;
    this.year = year;
    this.image = image;
  } */

  constructor( // Esto lo que hace es definir la propiedad, pasar como parametro y luego asignar un valor. Lo mismo que arriba
    public title: string, // parametros del objeto
    public year: number,
    public image: string
  ){}

}