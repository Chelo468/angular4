import { Component } from '@angular/core';
//Importamos el modelo creado en empleado.ts
import { Empleado } from './empleado';

@Component({
		selector: 'empleado',
		templateUrl: './empleado.component.html'
	})

export class EmpleadoComponent{
	public titulo = "Titulo Empleado";
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;


	constructor(){
		this.empleado = new Empleado('nombreEmpleado',27,'cargo0',true);
		this.trabajadores = [
			new Empleado('nombre',28,'cargo1',true),
			new Empleado('nombre2',29,'cargo2',false),
			new Empleado('nombre3',30,'cargo3',true),
			new Empleado('nombre4',31,'cargo4',false)
		];

		this.trabajador_externo = false;
		this.color = 'red';
		this.color_seleccionado = '#ccc';
	}
	ngOnInit(){
		//console.log(this.empleado);
	}

	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}
}