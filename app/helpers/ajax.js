export const ajax = (props) => {
  let { url, method = 'GET', body, callback, headers = {} } = props;

  // Configurar los parámetros para la solicitud
  const options = {
    method: method, // Método puede ser GET o POST
    headers: {
      'Content-Type': 'application/json',
      ...headers, // Permite agregar otros encabezados si es necesario
    },
    body: method === 'POST' ? JSON.stringify(body) : undefined, // Solo agregar el body en POST
  };

  // Realizar la solicitud
  fetch(url, options)
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => callback(data)) // Ejecutar la función callback con los datos de respuesta
    .catch(error => console.error("Error en la solicitud AJAX: ", error)); // Manejo de errores
};
