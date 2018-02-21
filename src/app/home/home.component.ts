import { Component } from '@angular/core';

//Importamos el servicio de ropa
import { RopaService } from '../services/ropa.service';

@Component({

	selector: 'home',
	templateUrl: './home.component.html',
	providers: [RopaService]
	})

export class HomeComponent{
	public titulo = "Página Principal";
	public listado_ropa:Array<string>;
	public prenda_a_guardar:string;
	public fecha;

	constructor(
		private _ropaService:RopaService
		){
		this.fecha = new Date(2018,1,21);		
	}

	ngOnInit(){
		//this.titulo =  this._ropaService.prueba('prueba');
		//console.log(this._ropaService.prueba('prueba'));
		this.listado_ropa = this._ropaService.getRopa();
	}

	addPrenda(){
		this._ropaService.addRopa(this.prenda_a_guardar);
		this.prenda_a_guardar = '';
	}

	eliminarPrenda(i){
		this._ropaService.deleteRopa(i);
	}
}