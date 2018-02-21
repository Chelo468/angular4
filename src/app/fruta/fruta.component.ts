import { Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})

export class FrutaComponent{
	public nombre_componente;
	public listado_frutas;

	constructor(){
		this.nombre_componente =  'Componente de fruta';
		this.listado_frutas  = 'naranja, manzana';

		//this.holaMundo();

	}

	ngOnInit(){
		//Metodo que se lanza justo despues del constructor

		
	}

	holaMundo(){
		alert('Hola Mundo!!!!');
	}



}