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
                           <td><a href="#" data-name="${serie.name}">${serie.name}</a></td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);

    // Agregar un eventListener a cada enlace
    const links = trElement.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => myFunction(serie));
    });
  });
}


let tarjetaActual: HTMLDivElement | null = null;

function myFunction(serie: Serie) {
  // Cambia el tamaño de la columna
  const columnaTabla = document.getElementsByClassName("col-12")[0];

  // Verifica si el elemento tiene la clase "col-12" antes de cambiarla
  if (columnaTabla && columnaTabla.classList.contains("col-12")) {
    // Cambia el tamaño de la columna solo si tiene la clase "col-12"
    columnaTabla.className = "col-6";
  }

  // Si ya existe una tarjeta, actualiza sus datos en lugar de crear una nueva
  if (tarjetaActual) {
    // Actualiza los datos de la tarjeta actual con los de la nueva serie
    const cardTitle = tarjetaActual.querySelector('.card-title');
    const cardChannel = tarjetaActual.querySelector('.card-channel');
    const cardSeasons = tarjetaActual.querySelector('.card-seasons');
    const cardImage = tarjetaActual.querySelector('.card-img-top');
    const linkButton = tarjetaActual.querySelector('.btn');

    if (cardTitle) {
      cardTitle.innerHTML = serie.name;
    }
    if (cardChannel) {
      cardChannel.innerHTML = "Descripción: " + serie.description;
    }
    if(cardImage){
      cardImage.setAttribute("src", serie.image);
      cardImage.setAttribute("alt", serie.name);
    }
    if (linkButton) {
      
      // Agrega el enlace al botón "Conoce más" y abre en una nueva ventana
      linkButton.innerHTML = "Conoce más";
      linkButton.setAttribute("href", serie.link);

      
    }
  } else {
    // Si no existe una tarjeta, crea una nueva
    tarjetaActual = document.createElement("div");
    tarjetaActual.className = "col-md-4";
    tarjetaActual.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text card-channel">Descripción: ${serie.description}</p>
          <a href="${serie.link}" target="_blank" class="btn btn-primary">Conoce más</a>
        </div>
      </div>`;
  
    // Agrega la tarjeta a la fila
    document.getElementsByClassName("row")[0].appendChild(tarjetaActual);
  }
}





function getSeasonAverage(series: Serie[]): number {
  let totalSeasons: number = 0;
  let numSeries: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  series.forEach((serie) => numSeries = numSeries + 1);
  const promedio: number = totalSeasons / numSeries;
  return promedio;
}
