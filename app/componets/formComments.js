
export const FormComment = (id) => {
    const CommentForm = document.createElement("form");

    CommentForm.id = "form-comment"
    CommentForm.setAttribute("class","form-comment")

    CommentForm.innerHTML = `
              <label for="contenido">Comentario:</label>
              <textarea id="contenido" name="contenido" rows="4" cols="50" placeholder="Escribe tu comentario aquí..."></textarea>
    
              <input type="hidden" name="enlaceId" value=${id}>
              <input type="hidden" name="userId" value="1">
                <button type="submit" class="button-comment">Enviar comentario</button>              
    `

    

    return CommentForm
}