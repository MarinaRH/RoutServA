import { Component, OnInit } from '@angular/core';
// leer una ruta
import { ActivatedRoute } from '@angular/router';
// importar el servicio
import {EquipoService} from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo:any[]=[];
  constructor( 
    private ruta:ActivatedRoute,
    private _servicio:EquipoService)
    {
    this.ruta.params.subscribe(params =>{
      console.log(params['id'])
      this.equipo=this._servicio.obteneruno(params['id']);
    })
  }

  ngOnInit() {
  }

}
