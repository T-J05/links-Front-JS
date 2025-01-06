export const HandleFormComment = (form, callback) => {
    if (!form) {
      console.error("Formulario no encontrado.");
      return;
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
      // Capturar los datos del formulario
      const contenido = form.querySelector("#contenido").value;
      const enlaceId = form.querySelector("input[name='enlaceId']").value;
      const userId = form.querySelector("input[name='userId']").value;
  
      // Crear el objeto que se enviará al backend
      const commentData = {
        contenido,
        enlaceId,
        userId,
      };
  
      // Llamamos al callback pasando los datos
      callback(commentData);
    });
  };
  