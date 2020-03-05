import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styles: ['.chart-container {display: grid; height: 300px;}']
})
export class GraficoBarraComponent{

  @Input() results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() { }

  onSelect(event) {
    console.log(event);
  }

}
