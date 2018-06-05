import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[]= [
    {
      nombre:'Julio Carrasco',
      especialidad:'Css',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sed obcaecati repellendus velit inventore atque aut quam officia voluptate beatae perferendis labore, nostrum dolorem? Ducimus tempora beatae nulla cum officia'
      
    },
    {
      nombre:'Mario Beltmon',
      especialidad:'Html',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sed obcaecati Pariatur sed obcaecati repellendus velit inventore atque aut quam officia voluptate beatae perferendis labore, nostrum dolorem? Ducimus tempora beatae nulla cum officia'
      
    },
    {
      nombre:'Alesandra Ramirez',
      especialidad:'Angular',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sed obcaecatiPariatur sed obcaecati repellendus velit inventore atque aut quam officia voluptate beatae perferendis labore, nostrum dolorem? Ducimus tempora beatae nulla cum officia'
      
    },
    {
      nombre:'Penelope Cruz',
      especialidad:'Java',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sed obcaecati .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sed obcaecatirepellendus velit inventore atque aut quam officia voluptate beatae perferendis labore, nostrum dolorem? Ducimus tempora beatae nulla cum officia'
      
    }
  ]
  constructor() { 

  }

  obtenerEquipo(){
    return this.equipo;
  }
  obteneruno(i){
    return this.equipo[i];
  }
}
