import { ajax } from "../helpers/ajax.js";
import api from "../helpers/urls.js";
import { createSpinner } from "../helpers/createSpinner.js";
import { RenderTags } from "./RenderTags.js";
import { HandleTagEvents } from "./HandleTagEvents.js";

export const NavTags = () => {
  const navEtiquetas = document.createElement("nav");
  const tituloEtiquetas = document.createElement("h2");
  tituloEtiquetas.textContent = "Etiquetas";

  // Agregar un spinner mientras se cargan las etiquetas
  const spinner = createSpinner("Cargando etiquetas...");
  navEtiquetas.appendChild(spinner);

  // Traer etiquetas del backend usando ajax
  ajax({
    url: api.Etiquetas, // URL para obtener las etiquetas
    callback: (response) => {
      const etiquetas = response.etiquetas;

      // Limpiar el spinner
      navEtiquetas.innerHTML = "";

      // Agregar las etiquetas renderizadas
      const tagList = RenderTags(etiquetas);
      navEtiquetas.appendChild(tagList);

      // Manejar eventos de clic en las etiquetas
      HandleTagEvents(navEtiquetas);
    },
  });

  // Envolver el título y la lista de etiquetas en un contenedor
  const contenedorEtiquetas = document.createElement("div");
  contenedorEtiquetas.appendChild(tituloEtiquetas);
  contenedorEtiquetas.appendChild(navEtiquetas);

  return contenedorEtiquetas;
};
