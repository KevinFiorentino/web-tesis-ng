import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pronostico-hoy',
	templateUrl: './pronostico-hoy.component.html',
	styleUrls: ['./pronostico-hoy.component.css']
})

export class PronosticoHoyComponent implements OnInit {

	inputBuscarCiudad: string;

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

	constructor() {

		this.descrip = '.....';
		this.icon = 'public/images/icons/clima_default.png';
		this.temp = '--';
		this.temp_min = '--';
		this.temp_max = '--';
		this.press = '-';
		this.hum = '-';
		this.vis = '-';
		this.wind = '-';
		this.sunrise = '--:--';
		this.sunset = '--:--';
		this.id = '0';
		this.city = '---';
		this.fecha = '---';

		this.error = '';

	}

	ngOnInit(): void {}

	buscarCiudad(): void {

		this.city = this.inputBuscarCiudad;

	}

}
