import { AddVote } from "../helpers/aggVote.js";

export const handleBvotes = (event) => {
    
    if (event.target.classList.contains("button-vote")) {
        const enlaceId = event.target.id; // Obtener el ID del enlace
        console.log("voto para el id", enlaceId);

        const votosElement = event.target.closest("#details-section").querySelector(".votos-class");

        // Llamar a AddVote con un callback que actualice el DOM
        AddVote(enlaceId, (updatedVotes) => {
            // Actualizar el número de votos con el valor retornado por la API
            votosElement.textContent = updatedVotes;
        });
    }
};
