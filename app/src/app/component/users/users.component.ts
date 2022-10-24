import { Component, OnInit } from '@angular/core';


export interface Articulo{
  id:number;
  titulo:string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  edad:number = 25;
  nombre:string = 'Tony'
  lista:string[]=[];
  objeto:Articulo={
    id: 1,
    titulo: 'COSA'
  }

  constructor() {
    this.lista.push('primero');
    this.lista.push('segundo');
    this.lista.push('tercero');
   }

  ngOnInit(): void {
  }

  agregarNombre(nom:string){
    this.lista.push(nom);
  }



}
