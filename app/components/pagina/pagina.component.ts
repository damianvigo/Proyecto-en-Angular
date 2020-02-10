import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string; // esta propiedad se puede mostrar en la vista
  public apellido: string;

  constructor(
    private _route: ActivatedRoute, // sacar parametros por la url
    private _router: Router // redirección a otra página
  ) { }

  ngOnInit() {
    // Recolectar los parametros de la url
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre; // dando valor a la propiedad
      this.apellido = params.apellido;
    });

  }

  redireccion() {
  // this._router.navigate(['/formulario']);  redirigir a otra pagina
  this._router.navigate(['/pagina-de-pruebas', 'Damián', 'Vigo']);
  }

}
