import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  {
  animales:Array<any>=[
    {tipo:'Perro',nombre:'juu',edad:10},
    {tipo:'Gato',nombre:'pepi',edad:6},
    {tipo:'Loro',nombre:'Huaj',edad:33},
    {tipo:'Boa',nombre:'Der',edad:2},

  ]

}
