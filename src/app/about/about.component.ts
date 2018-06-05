import { Component, OnInit } from '@angular/core';
// import servicios
import {EquipoService} from './../equipo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo:any[]=[];

  constructor(private _servicio:EquipoService) {
    this.equipo=_servicio.obtenerEquipo();
   }

  ngOnInit() {
  }

}
