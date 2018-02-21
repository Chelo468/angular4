import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//FormsModule para que funcione el two ways databinding
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import {CochesComponent} from './coches/coches.component';

//BDigital
import { DocumentComponent} from './document/document.component';
import {LoginComponent} from './login/login.component';


//Importamos Pipes
import { ConversorPipe } from './pipes/conversor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    DocumentComponent,
    LoginComponent,
    ConversorPipe,
    CochesComponent
  ],
  imports: [
  FormsModule,
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
