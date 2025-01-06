

export const createSpinner = (message = "Cargando...") => {
    const spinner = document.createElement("p");
    spinner.textContent = message;
    return spinner;
  };
  