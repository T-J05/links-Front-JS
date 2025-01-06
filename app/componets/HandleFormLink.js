export const HandleForm = (callback) => {
    const form = document.getElementById("form-enlace");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Capturar los datos del formulario
        const url = document.getElementById("url").value;
        const titulo = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
        const tagSelect = document.getElementById("tagSelect").value;

        // Crear el objeto que se enviará al backend
        const enlaceData = {
            url,
            titulo,
            descripcion,
            etiquetas: {nombre:tagSelect},
        };

        // Llamamos al callback pasando los datos
        callback(enlaceData);
    });
};
