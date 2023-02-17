import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../Service/conexion.service';
import {Router} from '@angular/router';
import { Categoria } from '../modelos/Categoria';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  categoria: Categoria[] = [];
  constructor(private conexion: ConexionService, private router:Router){}
    
  ngOnInit() {
    
    console.log("entrando al listado de categorias...")
    this.conexion.getCategorias()
    .subscribe(data=>{
      this.categoria=data
    })
    
  }

  Editar(categoria:Categoria){
    localStorage.setItem("id_categoria", categoria.id_categoria.toString());
    //console.log(categoria.id_categoria);
    //console.log(categoria.cat_nombre);
    //console.log(categoria.cat_descripcion);
    console.log(categoria);
    console.log(categoria.id_categoria.toString());
    this.router.navigate(["editar"]);
    return categoria;
    
  }
  
  
}


