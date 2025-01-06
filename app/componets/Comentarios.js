

export const Comentarios = (link) =>{
       let comentarios = document.createElement("details");
       let comentariosHtml = link.enlace.comentarios.length > 0
       ? link.enlace.comentarios.map(comentarioObj => `<li>${comentarioObj.contenido}</li>`).join("")
       : "<li>Sin comentarios</li>";
       comentarios.innerHTML=`
                                <summary>Comentarios</summary>
                                <ul>
                                    ${comentariosHtml}
                                </ul>`
   console.log(comentariosHtml);

   return comentarios
}