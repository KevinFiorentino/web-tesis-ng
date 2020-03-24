import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Ciudad } from './ciudad';

@Component({
	selector: 'app-pronostico-ciudades',
	templateUrl: './pronostico-ciudades.component.html',
	styleUrls: ['./pronostico-ciudades.component.css']
})

export class PronosticoCiudadesComponent implements OnInit {

	add_ciudad: string;
	error_table: string;

	ciudadesList: Ciudad[] = new Array();

	//Pasamos el servicio HTTP como parámetro al constructor
	constructor(public httpClient: HttpClient) {

		this.error_table = '';

		let cities = ["Bogota", "Buenos Aires", "Hong Kong", "Nueva York", "Madrid", "Mosku", 
			"Paris", "Roma", "Sidney", "Viena"];

		cities.forEach(value => {

			this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&units=metric&appid=f3f376b99fe63334a561bad62acb4f94')
			.subscribe((response) => {

				let city = new Ciudad(
					'public/images/icons/' + response['weather'][0]['icon'] + '.svg', 
					(Math.round(response['main']['temp'])).toString(), 
					(Math.floor(response['main']['temp_min'])).toString(), 
					(Math.ceil(response['main']['temp_max'])).toString(), 
					response['main']['humidity'], 
					response['name'], 
					response['id']
				);

				this.ciudadesList.push(city);

			});
		});

	}

	ngOnInit(): void {}

	addCiudadTable(): void {

		this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.add_ciudad + '&units=metric&appid=f3f376b99fe63334a561bad62acb4f94')
		.subscribe((response) => {

			let city = new Ciudad(
				'public/images/icons/' + response['weather'][0]['icon'] + '.svg', 
				(Math.round(response['main']['temp'])).toString(), 
				(Math.floor(response['main']['temp_min'])).toString(), 
				(Math.ceil(response['main']['temp_max'])).toString(), 
				response['main']['humidity'], 
				response['name'], 
				response['id']
			);

			this.ciudadesList.push(city);

        },
        (error) => {
        
        	this.error_table 		= 'Ciudad no encontrada';

			setTimeout(() => {
				this.error_table 	= '';
			}, 3000);
      
      	});

	}

	removeCiudadTable(id: string): void {
		let lstCityRemove = this.ciudadesList.filter(ciudad => ciudad.id !== id);
    	this.ciudadesList = lstCityRemove;
	}

}