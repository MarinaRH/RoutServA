import {RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// servicios
import {EquipoService} from './equipo.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**', redirectTo: 'inicio' , pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    InicioComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
