import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductosService } from '../providers/productos.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  productos:Producto[];
descuento:boolean;
searchText:string;
  constructor(public productosService : ProductosService) { 
    this.descuento=false;
  }

  ngOnInit() {
    this.productos = this.productosService.getProductos();
    
  }

}
