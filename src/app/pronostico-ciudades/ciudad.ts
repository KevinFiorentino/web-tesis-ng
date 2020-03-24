import { OnInit } from '@angular/core';

//Creamos la clase Ciudad para posteriormente instanciar las ciudades y renderizar la info al HTML
export class Ciudad implements OnInit {

	constructor(
			public icon: string,
			public temp: string, 
			public temp_min: string, 
			public temp_max: string, 
			public hum: string, 
			public city: string,
			public id: string
	) { 
		this.icon 		= 	icon;
		this.temp 		= 	temp;
		this.temp_min 	= 	temp_min;
		this.temp_max 	= 	temp_max;
		this.hum 		= 	hum;
		this.city 		= 	city;
		this.id 		= 	id;
	}

	ngOnInit(): void {}

}
