import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { SaldoComponent } from './component/saldo/saldo.component';
import { DatosEquipoComponent } from './component/datos-equipo/datos-equipo.component';
import { DatosClienteComponent } from './component/datos-cliente/datos-cliente.component';
import { RecomendacionesComponent } from './component/recomendaciones/recomendaciones.component';
import { TemplateDrivenComponent } from './formularios/template-driven/template-driven.component';
import { ReactiveFormComponent } from './formularios/reactive-form/reactive-form.component';

/*material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { BasicFormComponent } from './formularios/basic-form/basic-form.component';
import { NestedFormComponent } from './formularios/nested-form/nested-form.component';
import { ArrayFormComponent } from './formularios/array-form/array-form.component';

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
    RecomendacionesComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    ArrayFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    /*meterial*/
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
