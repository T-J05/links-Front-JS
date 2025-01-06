import { ajax } from "./ajax.js";
import api from "./urls.js"


export const AddVote = (idEnlace,updateVotesCallback) => {
    ajax({
        url:`${api.SumarVotos}${idEnlace}`,
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        // Permite agregar otros encabezados si es necesario
          },
        callback: (response) => {
            console.log({'Respuesta api': response})
            if (response.success){

                
                alert("¡Voto agregado correctamente");
                updateVotesCallback(response.enlace.votos);
            } else {
                alert("Error al votar intentelo mas tarde,ok???");
            }
            
        }
    })
}