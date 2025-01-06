import { ButtonVotes } from "./butonVote.js";
import { Comentarios } from "./Comentarios.js";
import { FormComment } from "./formComments.js";
import { handleBvotes } from "./HandleBVotes.js";
import { HandleFormComment } from "./HandleFormComment.js";
import { agregarComentarioAlBackend } from "../helpers/addComment.js";

export const Details = (link) => {
  console.log(link);
  let sectionDetails = document.createElement("section");
  sectionDetails.id = "details-section";
  sectionDetails.setAttribute("class", "detalles-seccion");

  // Procesar etiquetas
  let etiquetasHtml = link.enlace.etiquetas.length > 0
    ? link.enlace.etiquetas.map(etiquetaObj => etiquetaObj.nombre).join(", ")
    : "Sin etiquetas";

  // Generar contenido HTML
  sectionDetails.innerHTML = `
    <h2>${link.enlace.titulo}</h2>
    <details open>
      <summary>Información sobre el enlace</summary>
      <p>${link.enlace.descripcion}</p>
      <p><strong>Votos:</strong> <span class="votos-class">${link.enlace.votos}</span></p>
      <p><strong>Etiquetas:</strong> ${etiquetasHtml}</p>
    </details>
  `;

  sectionDetails.appendChild(ButtonVotes(link));
  sectionDetails.appendChild(Comentarios(link));

  // Crear el formulario de comentarios
  const formComment = FormComment(link.enlace.id);
  sectionDetails.appendChild(formComment);

  // Manejar eventos
  sectionDetails.addEventListener("click", handleBvotes);

  HandleFormComment(formComment, (formData) => {
    agregarComentarioAlBackend(formData, (nuevoComentario) => {
      // Actualizar los comentarios en el DOM
      const comentariosElement = sectionDetails.querySelector("details > ul");
      const nuevoComentarioHtml = `<li>${nuevoComentario.contenido}</li>`;
      comentariosElement.innerHTML += nuevoComentarioHtml;
    });
  });

  return sectionDetails;
};
