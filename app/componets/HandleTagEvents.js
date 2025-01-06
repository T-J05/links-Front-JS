export const HandleTagEvents = (navElement) => {
    const buttons = navElement.querySelectorAll(".tag-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const tagName = button.getAttribute("data-id");
        window.location.hash = `#/${tagName}`; 
      });
    });
  };
  