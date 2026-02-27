import  renderProject from "../ui/renderProjects.js";
import { projectForm } from "../ui/projectForm.js";
import { itemForm } from "../ui/itemForm.js";

const appContainer = document.getElementById("app-container");

export function render(state) {
    let view = state.view;
    if (view === "home") {
        renderHome(state.projects);
    };
    if (view === "open-project-form") {
        renderProjectForm();
    };
    if (view === "open-item-form") {
        renderItemForm();
    };
};

function renderHome(projects) {
    appContainer.innerHTML = "";
    console.log("inside renderHome", projects);
    projects.forEach((project) => {
        let projectHtml = renderProject(project);
        appContainer.appendChild(projectHtml);
    })
};

function renderProjectForm() {
    appContainer.innerHTML = "";

    const form = projectForm();
    appContainer.appendChild(form);
}

function renderItemForm() {
    appContainer.innerHTML = "";

    const form = itemForm();
    appContainer.appendChild(form);
}