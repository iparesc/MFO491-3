import { Component, OnInit, Input } from '@angular/core';

import { Producto } from '../model/producto';
import { ProductosService } from '../providers/productos.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
    
    
    productos:Producto[];
    cantidad:number;
    descuento:boolean;
    searchText:string;
  constructor(public productosService : ProductosService) { 
    console.log('Constructor de productosService');
  
    
    this.descuento=false;
  }

  ngOnInit() {
    this.productos = this.productosService.getProductos();
    
  }

  sum(product:Producto) {
  
    product.cantidad=product.cantidad+1;
    console.log('se hace la suma');

  }
  rest(product:Producto){
    if(product.cantidad>0){
    product.cantidad=product.cantidad-1;
    }
  }
  
}
