import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficoDona',
  templateUrl: './graficoDona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  // Doughnut
  @Input() ChartLabels:String[];
  @Input() ChartData:number[];
  @Input() ChartType:String;
  @Input() leyenda:String;
  constructor() { }

  ngOnInit() {
  }

}
