import {styles} from "./ui/styles.css";
import renderProject from "./ui/renderProjects.js"
import {createProject} from "./models/project.js";
import {projectForm} from "./ui/projectForm.js";
import { dispatch } from "./controller.js";
import { render } from "./models/render.js";

document.addEventListener("click", (e) => {
    if (e.target.closest("button[type='submit'], input[type='submit'")) {return}
    let btn = e.target.closest("[data-action]");
    if (!btn) {return console.log("no data-action")};
    let action = btn.dataset.action;
    dispatch({type: action});
});

document.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submit fired");
    let form = e.target.closest("form[data-form]");
    if (!form) {return console.log("no form data")};

    if (form.dataset.form === "project") {
        console.log("this is a form");
        // add code for saving project
    }

    if (form.dataset.form === "item") {
        // add code for submitting item
    }

    console.log("event fired");
})

const storageArr = [];

const project1 = createProject("Project 1");
const project2 = createProject("Project 2");
const project3 = createProject("Project 3");

storageArr.push(project1);
storageArr.push(project2);
storageArr.push(project3);

export const state = {
    view: "home",
    projects: [],
    currentProjectId: null,
};

state.projects = storageArr;
console.log(state.projects);
render(state);