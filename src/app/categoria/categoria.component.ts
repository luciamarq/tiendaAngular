import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  constructor(private router: Router){};

  Listar(){
    this.router.navigate(["listar"]);
  }

  nuevaCategoria(){
    this.router.navigate(["nuevo"]);
  }
  
  

}
