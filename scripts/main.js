import { series } from "./data.js";
var seriesTbody = document.getElementById('tabla_series'); // Nodo tbody que tiene el id="tabla_series"
var totalCreditElm = document.getElementById("season_average");
totalCreditElm.innerHTML = "".concat(getSeasonAverage(series));
renderCoursesInTable(series);
function renderCoursesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><a href=\"#\" data-name=\"").concat(serie.name, "\">").concat(serie.name, "</a></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        // Agregar un eventListener a cada enlace
        var links = trElement.querySelectorAll('a');
        links.forEach(function (link) {
            link.addEventListener('click', function () { return myFunction(serie); });
        });
    });
}
var tarjetaActual = null;
function myFunction(serie) {
    // Cambia el tamaño de la columna
    var columnaTabla = document.getElementsByClassName("col-12")[0];
    // Verifica si el elemento tiene la clase "col-12" antes de cambiarla
    if (columnaTabla && columnaTabla.classList.contains("col-12")) {
        // Cambia el tamaño de la columna solo si tiene la clase "col-12"
        columnaTabla.className = "col-6";
    }
    // Si ya existe una tarjeta, actualiza sus datos en lugar de crear una nueva
    if (tarjetaActual) {
        // Actualiza los datos de la tarjeta actual con los de la nueva serie
        var cardTitle = tarjetaActual.querySelector('.card-title');
        var cardChannel = tarjetaActual.querySelector('.card-channel');
        var cardSeasons = tarjetaActual.querySelector('.card-seasons');
        var cardImage = tarjetaActual.querySelector('.card-img-top');
        var linkButton = tarjetaActual.querySelector('.btn');
        if (cardTitle) {
            cardTitle.innerHTML = serie.name;
        }
        if (cardChannel) {
            cardChannel.innerHTML = "Descripción: " + serie.description;
        }
        if (cardImage) {
            cardImage.setAttribute("src", serie.image);
            cardImage.setAttribute("alt", serie.name);
        }
        if (linkButton) {
            // Agrega el enlace al botón "Conoce más" y abre en una nueva ventana
            linkButton.innerHTML = "Conoce más";
            linkButton.setAttribute("href", serie.link);
            linkButton.setAttribute("target", "_blank");
            // Agregar el evento click al botón para abrir el enlace
            linkButton.addEventListener('click', function (e) {
                e.preventDefault(); // Evita la acción predeterminada
                window.open(serie.link, '_blank'); // Abre el enlace en una nueva ventana
            });
        }
    }
    else {
        // Si no existe una tarjeta, crea una nueva
        tarjetaActual = document.createElement("div");
        tarjetaActual.className = "col-md-4";
        tarjetaActual.innerHTML = "\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(serie.name, "</h5>\n          <p class=\"card-text card-channel\">Descripci\u00F3n: ").concat(serie.description, "</p>\n          <a href=\"").concat(serie.link, "\" target=\"_blank\" class=\"btn btn-primary\">Conoce m\u00E1s</a>\n        </div>\n      </div>");
        // Agrega la tarjeta a la fila
        document.getElementsByClassName("row")[0].appendChild(tarjetaActual);
    }
}
function getSeasonAverage(series) {
    var totalSeasons = 0;
    var numSeries = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    series.forEach(function (serie) { return numSeries = numSeries + 1; });
    var promedio = totalSeasons / numSeries;
    return promedio;
}
