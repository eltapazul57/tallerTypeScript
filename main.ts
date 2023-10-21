import { series } from "./data.js";
import { Serie } from "./serie.js";

const seriesTbody: HTMLElement = document.getElementById('tabla_series')!; // Nodo tbody que tiene el id="tabla_series"
const totalCreditElm: HTMLElement = document.getElementById("season_average")!;


totalCreditElm.innerHTML = `${getSeasonAverage(series)}`

renderCoursesInTable(series);
function renderCoursesInTable(series: Serie[]): void {
  series.forEach(serie => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getSeasonAverage(series: Serie[]): number {
  let totalSeasons: number = 0;
  let numSeries: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  series.forEach((serie) => numSeries = numSeries + 1);
  const promedio: number = totalSeasons / numSeries;
  return promedio;
}

