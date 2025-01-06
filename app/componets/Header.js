import { NavTags } from "./NavTags.js";


export const Header = () => {
    let navPrincipal = document.createElement("nav");
    let header = document.createElement("header");
    let currentView =window.location.hash;

    console.log({"curreb":currentView})
    navPrincipal.innerHTML =` 
        <ul>
        <li title="Pagina de inicio"><a href="#/">Inicio</a></li>
        <li title="Pagina de busqueda"><a href="#/buscador">Buscador</a></li>
        <li title="Formulario de creacion de enlace"><a href="#/formLink">Agregar enlace</a></li>
        </ul>
        `
    header.appendChild(navPrincipal);
   

    if (currentView === "" || currentView === "#/" ){
        header.appendChild(NavTags());
        }

    
    
    return header
}