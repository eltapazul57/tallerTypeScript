import { series } from "./data.js";
var seriesTbody = document.getElementById('tabla_series'); // Nodo tbody que tiene el id="tabla_series"
var totalCreditElm = document.getElementById("season_average");
totalCreditElm.innerHTML = "".concat(getSeasonAverage(series));
renderCoursesInTable(series);
function renderCoursesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonAverage(series) {
    var totalSeasons = 0;
    var numSeries = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    series.forEach(function (serie) { return numSeries = numSeries + 1; });
    var promedio = totalSeasons / numSeries;
    return promedio;
}
