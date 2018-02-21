import { Injectable } from '@angular/core';

@Injectable({

	})


export class RopaService{
	
	public nombrePrenda = 'Jean';
	public coleccion_ropa = ['Jean', 'Remera'];

	prueba(nombre_prenda){
		return nombre_prenda;
	}

	addRopa(nombre_prenda){
		this.coleccion_ropa.push(nombre_prenda);
	}

	deleteRopa(index){
		this.coleccion_ropa.splice(index, 1);
	}

	getRopa(){
		return this.coleccion_ropa;
	}



}