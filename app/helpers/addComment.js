import { ajax } from "./ajax.js";
import api from "./urls.js"

export const agregarComentarioAlBackend = (comentarioData,updateCommentCallback) => {
    // Usamos ajax para enviar los datos al backend
    console.log({comentarioData:comentarioData})
    ajax({
      url: api.Comentar, // Endpoint para agregar un enlace
      method: "POST", // Método POST
      body: comentarioData, // Convertimos los datos a JSON
      headers: {
        "Content-Type": "application/json", // Aseguramos que enviamos JSON
      },
      callback: (response) => {
        // Si la respuesta es exitosa, redirigir al usuario
        console.log(response)
        if (response.success) {
          // Redirigir al usuario al index
          updateCommentCallback(response.comentario)
  
          // Mostrar el mensaje de confirmación
         
        } else {
          alert("Hubo un error al agregar el enlace.");
        }
      },
    });
  };
  