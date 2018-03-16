import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductosService } from '../providers/productos.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
    producto:Producto;
    productos:Producto[];
    descuento:boolean;
    searchText:string;
  constructor(public productosService : ProductosService) { 
    console.log('Constructor de productosService');
    this.descuento=false;
  }

  ngOnInit() {
    this.productos = this.productosService.getProductos();
    
  }
  sumProducto(producto:Producto) {
    
    producto=this.producto;
    console.log('sumo productoComponent sumProducto()');
    this.producto.cantidad=this.producto.cantidad++;
  }
  restarProducto() {
    let producto;
    console.log('resto el producto');
    this.producto.cantidad--;
  }
}
