import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importamos FormsModule para que funcione la directiva'ngModel'
import { FormsModule } from '@angular/forms';

//Importamos HttpClientModule para tener servicio HTTP
import { HttpClientModule } from '@angular/common/http';

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
        AppRoutingModule,
        FormsModule,            //Import FormsModule
        HttpClientModule        //Import HttpClientModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }