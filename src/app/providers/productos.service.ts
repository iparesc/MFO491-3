import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { MOCK_PRODUCTOS } from '../providers/mocks.productos';

@Injectable()
export class ProductosService {

  productos : Producto[];

  constructor() { 
    console.log('ProductosService constructor');
  }


  getProductos():Producto[]{
    console.log('ProdutctosService getProductos');
    let jsonData = JSON.parse(MOCK_PRODUCTOS);
    this.productos = [];
    let producto;

    jsonData.forEach( el => {
       producto = new Producto();
       
       producto.imagen = el.imagen;
       producto.precio = el.precio;
       producto.nombre = el.nombre;
       producto.cantidad= el.cantidad;
       producto.descuento=el.descuento;
       producto.oferta=el.oferta;
      

       this.productos.push(producto);
    });

    return this.productos;
  }

 

}
