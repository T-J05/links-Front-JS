import { ajax } from "../helpers/ajax.js";
import api from "../helpers/urls.js";

export const obtenerEtiquetas = (callback) => {
  ajax({
    url: api.Etiquetas, // Asegúrate de que esta ruta apunte al endpoint correcto
    callback: (data) => {
      if (data && data.etiquetas) {
        callback(data.etiquetas); // Devuelve las etiquetas al callback
      } else {
        console.error("No se encontraron etiquetas en la respuesta del servidor.");
        callback([]);
      }
    },
  });
};
