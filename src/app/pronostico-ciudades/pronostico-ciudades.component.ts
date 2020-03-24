import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-pronostico-ciudades',
	templateUrl: './pronostico-ciudades.component.html',
	styleUrls: ['./pronostico-ciudades.component.css']
})

export class PronosticoCiudadesComponent implements OnInit {

	constructor() {

		var cities = new Array ("Bogota", "Buenos Aires", "Hong Kong", 
			"Nueva York", "Madrid", "Mosku", "Paris", 
			"Roma", "Sidney", "Viena");

		//var ciudades = new Array(1, 4, 9); 

	}

	ngOnInit(): void {}

	addCiudadTable() {


	}

	removeCiudadTable() {

	}

}
