import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styles: ['.chart-container {display: grid; height: 300px;}']
})
export class GraficoBarraComponent implements OnDestroy{

  results: any[] = [
    {
      "name": "Juego 1",
      "value": 30
    },
    {
      "name": "Juego 2",
      "value": 20
    },
    {
      "name": "Juego 3",
      "value": 10
    },
    {
      "name": "Juego 4",
      "value": 35
    }
  ];

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

  intervalo;

  constructor() {

    this.intervalo = setInterval(() => {
      console.log('tick');

      const newResult = [...this.results];
      // tslint:disable-next-line: forin
      for (let i in newResult) {
        newResult[i].value = Math.round(Math.random() * 500);
      }

      this.results = [...newResult];
    }, 5000);

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    clearInterval(this.intervalo);
  }
}
