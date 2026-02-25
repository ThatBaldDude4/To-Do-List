import  renderProject from "../ui/renderProjects.js";
import { projectForm } from "../ui/projectForm.js";

export function render(state) {
    let view = state.view;
    if (view === "home") {
        renderHome(state.projects);
    };
    if (view === "open-project-form") {
        renderProjectForm();
    };
    if (view === "item-form") {

    };
};

function renderHome(projects) {
    const appContainer = document.getElementById("app-container");
    appContainer.innerHTML = "";

    projects.forEach((project) => {
        let projectHtml = renderProject(project);
        appContainer.appendChild(projectHtml);
    })
};

function renderProjectForm() {
    const appContainer = document.getElementById("app-container");
    appContainer.innerHTML = "";

    const form = projectForm();
    appContainer.appendChild(form);
}