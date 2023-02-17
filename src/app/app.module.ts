import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListarComponent } from './listar/listar.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { FormsModule } from '@angular/forms';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ListarComponent,
    PostCategoriaComponent,
    EditarCategoriaComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
