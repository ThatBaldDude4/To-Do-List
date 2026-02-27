import {styles} from "./ui/styles.css";
import { dispatch } from "./controller.js";
import { render } from "./models/render.js";

export const state = {
    view: "home",
    projects: [],
    currentProjectId: null,
};

document.addEventListener("click", (e) => {
    if (e.target.closest("button[type='submit'], input[type='submit']")) {return}
    let btn = e.target.closest("[data-action]");
    if (!btn) {return console.log("no data-action")};
    let action = btn.dataset.action;
    
    if (action === "open-item-form") {
        state.currentProjectId = e.target.closest("[data-project-id]").dataset.projectId;
    }
    let projectId = null;
    let itemId = null;
    if (action === "delete-item") {
        projectId = e.target.closest("[data-project-id]").dataset.projectId;
        itemId = e.target.closest("[data-item-id]").dataset.itemId;
    }
    console.log(projectId);
    console.log(itemId, "itemid")   
    dispatch({type: action, payload: {projectId: projectId, itemId: itemId}});
});

document.addEventListener("submit", (e) => {
    e.preventDefault()
    let form = e.target.closest("form[data-form]");
    if (!form) {return console.log("no form data")};

    if (form.dataset.form === "project") {
        const title = form.querySelector("input").value;
        if (!title) {return};
        dispatch({type: "submit-project-form", payload: {title: title}});
    }

    if (form.dataset.form === "item") {
        const title = form.querySelector(".item-title-input").value;
        const description = form.querySelector(".item-description-input").value;
        const priority = form.querySelector("select").value;
        if (!title || !description) {return};
        dispatch({type: "submit-item-form", payload: {title: title, description: description, priority: priority}});
    }
    console.log("event fired");
})

render(state);