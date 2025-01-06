import { handleCardClick } from "./HandleDetails.js";


export const Card = (props) => {

    let { url, titulo, id, votos, etiquetas } = props;
    let article = document.createElement('article');
    
    article.setAttribute("class",'card')
    article.style.width = '18rem';

    let etiquetasHtml = etiquetas.length > 0
    ? etiquetas.map(etiquetaObj => etiquetaObj.etiqueta.nombre).join(", ")
    : "sin etiquetas";
    article.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">Votos:${votos}</p>
            <p class="card-text">etiquetas: ${etiquetasHtml}</p>
            <p class="card-text"><a href="${url}">URL</a></p>
            <a href="#/details/${id}" id=${id} class="btn btn-primary">Mas info</a>
        </div>
    `
    article.addEventListener("click", handleCardClick);

    return article
}