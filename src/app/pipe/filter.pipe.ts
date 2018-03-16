import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../model/producto';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * Filtro para buscar en una coleccion de Productos. No es CaseSensitive.
   * @param stock : Receta[]
   * @param searchText : string con el nombre
   */
  transform(stock: Producto[], searchText: string): Producto[] {

    if(!stock) return [];
    if(!searchText) return stock;
    searchText = searchText.toLowerCase();
    let productonombre = "";
    return stock.filter( productoIt => {
        productonombre = productoIt.nombre;        
        productonombre = productonombre.toLowerCase();
        return productonombre.includes(searchText);
    });
   }

}