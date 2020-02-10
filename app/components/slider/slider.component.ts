import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() nombre: string; // decorador input para recolectar el dato
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
