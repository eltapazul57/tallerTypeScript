
import { dataSeries } from './data.js';
import { Serie } from './serie.js';



let coursesTbody: HTMLElement = document.getElementById('series')!;


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 

 

