import {styles} from "./ui/styles.css";
import renderProject from "./ui/renderProjects.js"
import {createProject} from "./models/project.js";
import {projectForm} from "./ui/projectForm.js";
import { dispatch } from "./controller.js";
import { render } from "./models/render.js";

document.addEventListener("click", (e) => {
    let btn = e.target.closest("[data-action]");
    if (!btn) {return console.log("no data-action")};
    let action = btn.dataset.action;
    dispatch({type: action});
});

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