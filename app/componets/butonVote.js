

export const ButtonVotes = (link) =>{ 
    const { id } = link.enlace;
    
    const buttonVotes = document.createElement("button")
    buttonVotes.textContent = "Votar"
    buttonVotes.setAttribute("type","submit")
    buttonVotes.setAttribute("class","button-vote")
    buttonVotes.id = id

    return buttonVotes
}