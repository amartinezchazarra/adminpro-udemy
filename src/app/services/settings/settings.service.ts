import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  }

  constructor(@Inject(DOCUMENT) private _documento) {
    this.cargarAjustes();
   }

  guardarAjustes(){
    // Guardado en el localStorage
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
  }
  cargarAjustes(){

    if (localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // Cargando ajustes en el localStorage
    }else{
      // Cargando ajustes por defecto
    }

    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(tema:any){
    let url=`assets/css/colors/${ tema }.css`
    this._documento.getElementById('tema').setAttribute('href', url)
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

interface Ajustes{
  temaUrl: String;
  tema: String;
}