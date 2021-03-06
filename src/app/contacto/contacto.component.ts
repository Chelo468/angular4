import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({

	selector: 'contacto',
	templateUrl: './contacto.component.html'
	})

export class ContactoComponent{
	public titulo = "Página de Contacto";
	public parametro;

	constructor(
		private _route:ActivatedRoute,
		private _router:Router
		){}

	ngOnInit(){
		this._route.params.forEach((params:Params) => {
				this.parametro = params['page'];
				//console.log(params);
			});
	}

	redirigir(param:string){
		this._router.navigate(['/contacto', param]);
	}
}