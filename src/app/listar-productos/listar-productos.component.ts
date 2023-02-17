import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../modelos/Producto';
import { ConexionService } from '../Service/conexion.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  producto: Producto[]=[];
  constructor(private conexion: ConexionService){}
    
  ngOnInit() {
    
    console.log("entrando al listado de Productos...")
    this.conexion.getProductos()
    .subscribe(data=>{
      this.producto=data;
    })
    
  }


}
