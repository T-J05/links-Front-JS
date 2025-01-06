import { Header } from "./componets/Header.js"
import { Main } from "./componets/Main.js";
import { Router } from "./componets/Router.js";



export const App = () => {
    let divRoot = document.querySelector("#root")
    divRoot.innerHTML = "<h1>AlLinks<\h1>";
    divRoot.append(Header());
    divRoot.append(Main());
    Router()



    return root
}