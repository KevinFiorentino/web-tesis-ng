import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PronosticoHoyComponent } from './pronostico-hoy/pronostico-hoy.component';
import { PronosticoCiudadesComponent } from './pronostico-ciudades/pronostico-ciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    PronosticoHoyComponent,
    PronosticoCiudadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
