export function itemForm() {
    const container = document.createElement("form");
    const heading = document.createElement("h2");
    const titlelabel = document.createElement("label");
    const titleInput = document.createElement("input");
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

    submitBtn.textContent = "SUBMIT";
    submitBtn.setAttribute("data-action", "submit-form");
    submitBtn.type = "submit";

    cancelBtn.textContent = "CANCEL";
    cancelBtn.setAttribute("data-action", "cancel-form");
    cancelBtn.type = "button";

    titlelabel.appendChild(titleInput);
    descriptionLabel.appendChild(descriptionInput);

    container.appendChild(heading);
    container.appendChild(titlelabel);
    container.appendChild(descriptionLabel);
    container.appendChild(submitBtn);
    container.appendChild(cancelBtn);

    return container;
}