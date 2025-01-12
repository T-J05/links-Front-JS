import { handleCardClick } from "./HandleDetails.js";

export const Card = (props) => {
    let { url, titulo, id, votos, etiquetas } = props;
    
    console.log({ñ:etiquetas})
    console.log({ñ:etiquetas[0].nombre})
    // Asegúrate de que 'etiquetas' sea siempre un array
    etiquetas = Array.isArray(etiquetas) ? etiquetas : [];

    

    let article = document.createElement('article');
    article.setAttribute("class", 'card');
    article.style.width = '18rem';

    // Genera el HTML para las etiquetas o muestra "sin etiquetas" si no hay
    const etiquetaMostrar = etiquetas.length > 0 && etiquetas[0].etiqueta && etiquetas[0].etiqueta.nombre
    ? etiquetas[0].etiqueta.nombre
    : etiquetas[0]?.nombre || "sin etiqueta";

    // Contenido de la tarjeta
    article.innerHTML = `
        <div class="card-body">
            <h4 class="tagTitle">Etiqueta: ${etiquetaMostrar}</h4>
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">Votos: ${votos}</p>
            <p class="card-text"><a href="${url}">URL</a></p>
            <a href="#/details/${id}" id=${id} class="btn btn-primary">Más info</a>
        </div>
    `;

    // Manejar clics en la tarjeta
    article.addEventListener("click", handleCardClick);

    return article;
};
