function renderItem(item, projectId) {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    const text = document.createElement("p");
    const priority = document.createElement("div");
    const dueDate = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    container.setAttribute("data-item-id", item.id);
    title.classList.add("item-title");
    text.classList.add("item-description");

    title.textContent = item.title;
    text.textContent = item.description;

    priority.textContent = `${item.priority} Priority`;

    dueDate.textContent = `Due ${item.dueDate}`;
    console.log(item)

    deleteBtn.textContent = "Delete Item";
    deleteBtn.type = "button";
    deleteBtn.setAttribute("data-project-id", projectId);
    deleteBtn.setAttribute("data-action", "delete-item");
    deleteBtn.classList.add("delete-btn");

    editBtn.textContent = "Edit";
    editBtn.type = "button";
    editBtn.setAttribute("data-action", "edit-item");
    editBtn.classList.add("edit-btn");

    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(priority);
    container.appendChild(dueDate);
    container.appendChild(deleteBtn);
    container.appendChild(editBtn);

    return container;
}

export default function renderProject(project) {
    const container = document.createElement("div");
    const h2 = document.createElement("h2");
    const addItemBtn = document.createElement("button");
    const itemContainer = document.createElement("div");

    container.setAttribute("data-project-id", project.id);
    container.classList.add("project-container");

    itemContainer.setAttribute("data-items-for", project.id);

    h2.textContent = project.title;
    h2.classList.add("project-title");

    addItemBtn.classList.add("add-item-btn");
    addItemBtn.textContent = "Add Item";
    addItemBtn.setAttribute("data-action", "open-item-form");

    container.appendChild(h2);
    container.appendChild(addItemBtn);

    console.log(project, "inside renderProject")
    project.items.forEach((item) => {
        let itemHtml = renderItem(item, project.id);
        itemContainer.appendChild(itemHtml);
    });

    container.appendChild(itemContainer);

    return container;
}