import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ListarComponent } from './listar/listar.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  
  {path: 'categorias', component:CategoriaComponent},
  {path:'listar', component:ListarComponent},
  {path: 'nuevo', component:PostCategoriaComponent},
  {path: 'editar', component:EditarCategoriaComponent},
  {path: 'productos', component:ProductoComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
