export function projectForm() {
    const container = document.createElement("form");
    const heading = document.createElement("h2");
    const titlelabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const submitBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    container.setAttribute("data-form", "project");

    heading.textContent = "Project Form";

    titlelabel.textContent = "Project Title:";
    titlelabel.classList.add("title-label");

    titleInput.type = "input";
    titleInput.classList.add("title-input");

    submitBtn.textContent = "SUBMIT";

    submitBtn.type = "submit";

    cancelBtn.textContent = "CANCEL";
    cancelBtn.setAttribute("data-action", "cancel-form");
    cancelBtn.type = "button";

    titlelabel.appendChild(titleInput);

    container.appendChild(heading);
    container.appendChild(titlelabel);
    container.appendChild(submitBtn);
    container.appendChild(cancelBtn);

    return container;
};