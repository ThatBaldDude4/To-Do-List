export function renderItem(item) {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const text = document.createElement("p");

    container.setAttribute("data-item-id", item.id);
    title.classList.add("item-title");
    text.classList.add("item-description");

    title.textContent = item.title;
    text.textContent = item.description;

    container.appendChild(title);
    container.appendChild(text);

    return container;
}

export function renderProject(project) {
    const container = document.createElement("div");
    const h2 = document.createElement("h2");
    const itemContainer = document.createElement("div");

    container.setAttribute("data-project-id", project.id);
    itemContainer.setAttribute("data-items-for", project.id);
    h2.textContent = project.title;
    h2.classList.add("project-title");
    container.appendChild(h2);

    project.items.forEach((item) => {
        let itemHtml = renderItem(item);
        itemContainer.appendChild(itemHtml);
    });

    container.appendChild(itemContainer);

    return container;
}