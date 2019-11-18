import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
@ViewChild('entrada', {static: false}) txtElement: ElementRef;

@Input() Leyenda: string = "Leyenda";
@Input() progreso: number = 50;

@Output() cambiaValor:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue:number){
    if (newValue>=100){
      this.progreso=100;
    }else if (newValue <= 0){
      this.progreso=0;
    }else {
      this.progreso = newValue;
    }
    this.txtElement.nativeElement.value=this.progreso;
    this.cambiaValor.emit(this.progreso);
  }

  cambiarValor( valor:number){
    if(this.progreso >100  && this.progreso >0){
      this.progreso=100;
      return;
    }
    if(this.progreso <0){
      this.progreso=0;
      return;
    }
    this.txtElement.nativeElement.focus();
    this.progreso =this.progreso + valor;
    this.cambiaValor.emit(this.progreso);
  }


}
