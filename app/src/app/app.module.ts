import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { SaldoComponent } from './component/saldo/saldo.component';
import { DatosEquipoComponent } from './component/datos-equipo/datos-equipo.component';
import { DatosClienteComponent } from './component/datos-cliente/datos-cliente.component';
import { RecomendacionesComponent } from './component/recomendaciones/recomendaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    TopbarComponent,
    SaldoComponent,
    DatosEquipoComponent,
    DatosClienteComponent,
    RecomendacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
