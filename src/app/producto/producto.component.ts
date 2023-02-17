import { Component } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  constructor(private router: Router){};

  ListarProductos(){
    this.router.navigate(["listarProductos"]);
  }

  nuevoProducto(){
    this.router.navigate(["nuevoProducto"]);
  }

}
