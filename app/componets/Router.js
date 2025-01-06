import { FilteredLinks } from "./LinksFilter.js";
import { ajax } from "../helpers/ajax.js";
import api from "../helpers/urls.js";
import { ContainerCards } from "./ContainerCards.js";
import { formLink } from "./formLink.js";
import { GetDetailsLink } from "../helpers/linksDetails.js";
import { Details } from "./Details.js";

export const Router = () => {
  let { hash } = location;

  const section = document.getElementById("section");

  if (!section) {
    console.error("No se encontró el contenedor principal con ID 'section'.");
    return;
  }

  section.innerHTML = ""; // Limpiar el contenido anterior en cada cambio de ruta

  if (hash === "" || hash === "#/" || hash === "#") {
    // Cargar todos los enlaces
    ajax({
      url: api.TODOS,
      callback: (data) => {
        section.appendChild(ContainerCards({ enlaces: data.enlaces })); // Mostrar todos los enlaces
      },
    });
  } else if (hash === "#/formLink") {
    const formulario = formLink(); // Genera el formulario
    section.appendChild(formulario); // Agrega el formulario al contenedor principal
    console.log("Mostrar formulario para agregar enlace.");

  }else if (hash.startsWith("#/details/")) {
    const id = hash.split("/")[2]; // Extraer ID de la URL

    // Llamar a GetDetailsLink y pasar un callback para manejar los datos
    GetDetailsLink(id, (linkData) => {
      if (linkData) {
        section.appendChild(Details(linkData)); // Mostrar los detalles del enlace
      } else {
        section.innerHTML = `<p>No se pudo cargar la información del enlace. Inténtalo más tarde.</p>`;
      }})
  } else if (hash.startsWith("#/")) {
        const etiqueta = hash.slice(2); // Eliminar "#/"
        FilteredLinks(etiqueta); // Filtrar los enlaces por etiqueta
    }
};
