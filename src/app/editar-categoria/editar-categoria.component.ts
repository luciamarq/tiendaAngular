import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../Service/conexion.service';
import { Router } from '@angular/router';
import { Categoria } from '../modelos/Categoria';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  categoria:Categoria = new Categoria();
  
  constructor(private router:Router, private conexion:ConexionService){}
  ngOnInit() {
    
   
}
 Editar(categoria:Categoria){
  let id=localStorage.getItem("id_categoria");
  this.conexion.actualizarCategoria(categoria)
    .subscribe(data=>{
      alert("Actualizando...");

      this.categoria.id_categoria=data.id_categoria;
      this.categoria.cat_nombre=data.cat_nombre;
      this.categoria.cat_descripcion=data.cat_descripcion;
      
      this.router.navigate(["listar"]);
      
      
      

    })
 }
  
}
