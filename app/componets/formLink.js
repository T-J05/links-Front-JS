import { obtenerEtiquetas } from "../helpers/tags.js";
import { HandleForm } from "./HandleFormLink.js";
import { agregarEnlaceAlBackend } from "../helpers/addLink.js";

export const formLink = () => {
  const main = document.createElement("div");
  main.innerHTML = `
    <form id="form-enlace">
      <label for="url">URL</label>
      <input type="url" id="url" name="url" placeholder="Ej: https://www.google.com" required><br>

      <label for="titulo">Título</label>
      <input type="text" id="titulo" name="titulo" placeholder="Ej: Enlace a Google" required maxlength="30"><br>

      <label for="descripcion">Descripción</label>
      <textarea id="descripcion" name="descripcion" required maxlength="150" placeholder="Ej: Página principal de búsqueda de Google"></textarea><br>

      <label for="tagSelect">Etiqueta</label>
      <select id="tagSelect" name="tagSelect" required>
        <option value="" disabled selected>Selecciona una etiqueta</option>
      </select><br>

      <button type="submit">Guardar enlace</button>
    </form>
  `;

  const tagSelect = main.querySelector("#tagSelect");

  // Usar obtenerEtiquetas para cargar las opciones del select
  obtenerEtiquetas((etiquetas) => {
    etiquetas.forEach((etiqueta) => {
      const option = document.createElement("option");
      option.value = etiqueta.nombre;
      option.textContent = etiqueta.nombre;
      tagSelect.appendChild(option);
    });
  });

  setTimeout(() => {
    HandleForm((formData) => {
      agregarEnlaceAlBackend(formData);
    });
  }, 100);

  
  return main;
};
