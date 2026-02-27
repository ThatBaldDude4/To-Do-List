import {styles} from "./ui/styles.css";
import {createProject} from "./models/project.js";
import { dispatch } from "./controller.js";
import { render } from "./models/render.js";
import { createItem } from "./models/item.js";

export const state = {
    view: "home",
    projects: [],
    currentProjectId: null,
};

document.addEventListener("click", (e) => {
    if (e.target.closest("button[type='submit'], input[type='submit]'")) {return}
    let btn = e.target.closest("[data-action]");
    if (!btn) {return console.log("no data-action")};
    let action = btn.dataset.action;
    
    if (action === "open-item-form") {
        state.currentProjectId = e.target.closest("[data-project-id]").dataset.projectId;;
    }
        
    dispatch({type: action});
});

document.addEventListener("submit", (e) => {
    e.preventDefault()
    let form = e.target.closest("form[data-form]");
    if (!form) {return console.log("no form data")};

    if (form.dataset.form === "project") {
        const title = form.querySelector("input").value;
        if (!title) {return};
        let project = createProject(title);
        state.projects.push(project);
        dispatch({type: "home"});
        // add code for saving project
    }

    if (form.dataset.form === "item") {
        const title = form.querySelector(".item-title-input").value;
        const description = form.querySelector(".item-description-input").value;
        if (!title || !description) {return};

        let item = createItem(title, description);
        const project = state.projects.find(
            p => p.id === state.currentProjectId
        );
        project.addItem(item);
        dispatch({type: "home"});
        // add code for submitting item
    }

    console.log("event fired");
})

render(state);