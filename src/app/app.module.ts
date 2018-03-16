import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ProductosService } from './providers/productos.service';


@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
