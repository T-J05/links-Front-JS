export const RenderTags = (tags = []) => {
    const ul = document.createElement("ul");
    ul.innerHTML = tags
      .map(
        (tag) =>
          `<li><button class="tag-button" data-id="${tag.nombre}">${tag.nombre}</button></li>`
      )
      .join("");
    return ul;
  };
  