import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { ListarComponent } from './listar/listar.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { PostProductosComponent } from './post-productos/post-productos.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  
  {path: 'categorias', component:CategoriaComponent},
  {path:'listar', component:ListarComponent},
  {path: 'nuevo', component:PostCategoriaComponent},
  {path: 'editar', component:EditarCategoriaComponent},
  {path: 'productos', component:ProductoComponent},
  {path: 'listarProductos', component:ListarProductosComponent}, 
  {path: 'nuevoProducto', component:PostProductosComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
