import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Categoria } from '../modelos/Categoria';
import { ConexionService } from '../Service/conexion.service';


@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})

export class PostCategoriaComponent implements OnInit{

  categoria:Categoria= new Categoria();
  constructor(private router:Router, private conexion: ConexionService){};
 
  Guardar(categoria:Categoria){
    this.conexion.crearCategoria(categoria)
    .subscribe(data=>{
      alert("Registrado con existo!");
      this.router.navigate(["listar"]);
    })
    
  }
  ngOnInit(){
    
    
  }

  
}
