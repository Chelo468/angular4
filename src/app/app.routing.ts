import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {CochesComponent} from './coches/coches.component';

//import { DocumentComponent} from './document/document.component';
//import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},
    {path: 'coches', component: CochesComponent},
    {path: '**', component: HomeComponent},

]
/*[
	{path: 'documents', name: 'Documents', component: DocumentComponent},
	{path: '', component: LoginComponent },
    {path: 'login', name: 'Login', component: 'msLogin'},
    {path: 'sign-up/:cc', name: 'SignUp', component: 'msSignUp' },
    {path: 'sign-up/', name: 'SignUp', component: 'msSignUp' },
    {path: 'notifications/:hash', name: 'Notification', component: 'msNotification' },
    {path: 'restore', name: 'Restore', component: 'msRestore' },
    {path: 'change-password/:reset', name: 'ChangePassword', component: 'msChangePassword' },
    {path: 'activate-count/:reset', name: 'ActivateCount', component: 'msActivateCount' },
    {path: 'api/pagos', name: 'Pagos', component: 'msPagos' },
    {path: '**', redirectTo:['Login'] }
]*/
/*[

	{path: '', component: HomeComponent},
	{path: 'empleado', component: EmpleadoComponent},
	{path: 'fruta', component: FrutaComponent},
	{path: 'pagina-principal', component: HomeComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: '**', component: HomeComponent},

];*/

export const appRoutingProviders: any[] = [];


//Modulo de rutas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);