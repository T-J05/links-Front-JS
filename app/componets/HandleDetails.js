
export const handleCardClick = (event) => {
    // Verificar si el clic fue en el botón "Más info"
    if (event.target.classList.contains("btn-primary")) {
        const enlaceId = event.target.id; // Obtener el ID del enlace
        console.log("ID del enlace clickeado:", enlaceId);
        
        // Cambiar el hash para redirigir a la vista de detalles
        location.hash = `#/details/${enlaceId}`;
    }
};
