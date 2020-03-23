import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-pronostico-hoy',
	templateUrl: './pronostico-hoy.component.html',
	styleUrls: ['./pronostico-hoy.component.css']
})

export class PronosticoHoyComponent implements OnInit {

	buscar_ciudad: string;

	descrip: string;
	icon: string;
	temp: string;
	temp_min: string;
	temp_max: string;
	press: string;
	hum: string;
	vis: string;
	wind: string;
	sunrise: string;
	sunset: string;
	id: string;
	city: string;
	fecha: string;

	error: string;

	//Pasamos el servicio HTTP como parámetro al constructor
	constructor(public httpClient: HttpClient) {

		let meses 	= new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", 
			"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")
		let f 		= new Date()
		let fecha 	= f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()

		this.descrip 	= '.....';
		this.icon 		= 'public/images/icons/clima_default.png';
		this.temp 		= '--';
		this.temp_min 	= '--';
		this.temp_max 	= '--';
		this.press 		= '-';
		this.hum 		= '-';
		this.vis 		= '-';
		this.wind 		= '-';
		this.sunrise 	= '--:--';
		this.sunset 	= '--:--';
		this.id 		= '';
		this.city 		= '---';
		this.fecha 		= fecha;

		this.error 		= '';

	}

	ngOnInit(): void {}

	buscarCiudad(): void {

		this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.buscar_ciudad + '&units=metric&appid=f3f376b99fe63334a561bad62acb4f94')
		.subscribe((response) => {

			let sunrise = new Date(response['sys']['sunrise'] * 1000)
			let sunrise_hours = sunrise.getHours()
			let sunrise_minutes = "0" + sunrise.getMinutes()

			let sunset = new Date(response['sys']['sunset'] * 1000)
			let sunset_hours = sunset.getHours()
			let sunset_minutes = "0" + sunset.getMinutes()

			this.descrip 	= this.getDescription(response['weather'][0]['icon']);
			this.icon 		= 'public/images/icons/' + response['weather'][0]['icon'] + '.svg';
			this.temp 		= (Math.round(response['main']['temp'])).toString();
			this.temp_min 	= (Math.floor(response['main']['temp_min'])).toString();
			this.temp_max 	= (Math.ceil(response['main']['temp_max'])).toString();
			this.press 		= response['main']['pressure'];
			this.hum 		= response['main']['humidity'];
			this.vis 		= response['visibility'];
			this.wind 		= response['wind']['speed'];
			this.sunrise 	= sunrise_hours + ':' + sunrise_minutes.substr(-2);
			this.sunset 	= sunset_hours + ':' + sunset_minutes.substr(-2);
			this.id 		= response['id'];
			this.city 		= response['name'];

        },
        (error) => {
        
        	this.error 		= 'Ciudad no encontrada';

			this.descrip 	= '.....';
			this.icon 		= 'public/images/icons/clima_default.png';
			this.temp 		= '--';
			this.temp_min 	= '--';
			this.temp_max 	= '--';
			this.press 		= '-';
			this.hum 		= '-';
			this.vis 		= '-';
			this.wind 		= '-';
			this.sunrise 	= '--:--';
			this.sunset 	= '--:--';
			this.id 		= '';
			this.city 		= '---';

			setTimeout(() => {
				this.error 	= '';
			}, 3000);
      
      	});

	}

	getDescription(icon: string) {
		switch(icon) {
			case '01d': case '01n': {
				return "Cielo despejado";
			};break;
			case '02d': case '02n': {
				return "Algunas nubes";
			};break;
			case '03d': case '03n': {
				return "Nublado";
			};break;
			case '04d': case '04n': {
				return "Nublado";
			};break;
			case '09d': case '09n': {
				return "Probabilidad de lluvias";
			};break;
			case '10d': case '10n': {
				return "Lluvioso";
			};break;
			case '11d': case '11n': {
				return "Tormenta eléctrica";
			};break;
			case '13d': case '13n': {
				return "Nevadas";
			};break;
			case '50d': case '50n': {
				return "Niebla";
			};break;
		}
	}

}
