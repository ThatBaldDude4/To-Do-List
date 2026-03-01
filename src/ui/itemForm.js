import { state } from "../index.js";

export function itemForm() {
    const container = document.createElement("form");
    const heading = document.createElement("h2");
    const titlelabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const select = document.createElement("select");
    const lowPriorityOption = document.createElement("option");
    const mediumPriorityOption = document.createElement("option");
    const highPriorityOption = document.createElement("option");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    const submitBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    container.setAttribute("data-form", "item");

    heading.textContent = "Item Form";

    titlelabel.textContent = "Item Title:";
    titleInput.classList.add("item-title-label");

    titleInput.type = "input";
    titleInput.classList.add("item-title-input");

    descriptionLabel.textContent = "Item description";
    descriptionLabel.classList.add("item-description-label");

    descriptionInput.type = "input";
    descriptionInput.classList.add("item-description-input");

    select.textContent = "Priority:";
    lowPriorityOption.textContent = "Low";
    mediumPriorityOption.textContent = "Medium";
    highPriorityOption.textContent = "High";
    lowPriorityOption.value = "Low";
    mediumPriorityOption.value = "Medium";
    highPriorityOption.value = "High";
    select.appendChild(lowPriorityOption);
    select.appendChild(mediumPriorityOption);
    select.appendChild(highPriorityOption);

    submitBtn.textContent = "SUBMIT";
    submitBtn.setAttribute("data-action", "submit-form");
    submitBtn.type = "submit";

    cancelBtn.textContent = "CANCEL";
    cancelBtn.setAttribute("data-action", "cancel-form");
    cancelBtn.type = "button";

    titlelabel.appendChild(titleInput);
    descriptionLabel.appendChild(descriptionInput);

    if (state.view === "edit-item") {
        let project = state.projects.find((project) => {
            return project.id === state.currentProjectId;
        });
        let item = project.items.find((item) => {
            return item.id === state.currentItemId;
        });
        titleInput.value = item.title;
        descriptionInput.value = item.description;
        submitBtn.setAttribute("data-action", "submit-item-edit-form");
    }

    container.appendChild(heading);
    container.appendChild(titlelabel);
    container.appendChild(descriptionLabel);
    container.appendChild(select);
    container.appendChild(submitBtn);
    container.appendChild(cancelBtn);

    return container;
}