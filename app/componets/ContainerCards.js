import { Card } from "./Card.js"


export const ContainerCards = (props) =>{
    let { enlaces } = props;
  
    let section = document.createElement('section')
    section.id = "container-cards"
    enlaces.map(el => section.append(Card(el)))

    return section
}