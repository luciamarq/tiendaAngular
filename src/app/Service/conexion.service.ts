import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';
import { Categoria } from '../modelos/Categoria';
import { Producto } from '../modelos/Producto';



@Injectable({
  providedIn: 'root'
})

export class ConexionService {

  API_URL: string = 'http://localhost:8080/categorias';

  API_PRODUCTOS: string = 'http://localhost:8080/productos';
 
  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(this.API_URL)
  }

  crearCategoria(categoria:Categoria){
    return this.http.post<Categoria>(this.API_URL,categoria);
  }

  getCategoriaId(id_categoria:number){
    this.http.get<Categoria>(this.API_URL+"/"+id_categoria)

  }
  actualizarCategoria(categoria:Categoria){
    return this.http.put<Categoria>(this.API_URL+"/"+categoria.id_categoria, categoria);
  }
  deleteCategoria(categoria:Categoria){
    return this.http.delete<Categoria>(this.API_URL+"/"+categoria.id_categoria);
  }
  getProductos(){
    return this.http.get<Producto[]>(this.API_PRODUCTOS);
  }
 
}
