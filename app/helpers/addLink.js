import { ajax } from "./ajax.js";
import api from "./urls.js"

export const agregarEnlaceAlBackend = (enlaceData,) => {
    // Usamos ajax para enviar los datos al backend
    console.log({enlaceData:enlaceData})
    ajax({
      url: api.createLink, // Endpoint para agregar un enlace
      method: "POST", // Método POST
      body: enlaceData, // Convertimos los datos a JSON
      headers: {
        "Content-Type": "application/json", // Aseguramos que enviamos JSON
      },
      callback: (response) => {
        // Si la respuesta es exitosa, redirigir al usuario
        console.log(response)
        if (response.success) {
          // Redirigir al usuario al index
          window.location.hash = "#/";
  
          // Mostrar el mensaje de confirmación
          alert("¡Enlace agregado correctamente!");
        } else {
          alert("Hubo un error al agregar el enlace.");
        }
      },
    });
  };
  