import { ajax } from "../helpers/ajax.js";
import api from "../helpers/urls.js";
import { ContainerCards } from "./ContainerCards.js";

export const FilteredLinks = (etiqueta) => {
  const section = document.getElementById("section"); // Reutilizar el contenedor principal
    console.log({etiquetaputa:etiqueta})
  if (!section) {
    console.error("El contenedor principal con ID 'section' no existe.");
    return;
  }

  section.innerHTML = ""; // Limpiar el contenido anterior

  // Llamar al API para obtener los enlaces filtrados
  ajax({
    url: `${api.getLinksByTag}${etiqueta}`,
    callback: (data) => {
      const enlaces = data.enlaces;
      
      if (!enlaces || enlaces.length === 0) {
        // Mostrar mensaje cuando no hay enlaces
        const mensaje = document.createElement("p");
        mensaje.textContent = `No se encontraron enlaces para la etiqueta "${etiqueta}".`;
        mensaje.classList.add("mensaje-vacio"); // Clase opcional para estilos
        section.appendChild(mensaje);
      } else {
        // Si hay enlaces, renderizarlos con ContainerCards
        section.appendChild(ContainerCards({ enlaces }));
      }
    },
  });
};
