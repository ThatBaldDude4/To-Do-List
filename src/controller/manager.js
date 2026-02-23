import {Item} from "../models/item.js";
import {Project} from "../models/project.js";
import renderProject from "../ui/renderProjects.js";

const root = document.getElementById("app-container");

export function createProject(title) {
    const project = new Project({title});
    return project;
};

export function createItem(title, description) {
    const item = new Item({title, description});
    return item;
};

const project1 = createProject("Project 1");
const item1 = createItem("First Title", "Testing out my functions");
const item2 = createItem("Second Item", "More testsss yay");
project1.addItem(item1);
project1.addItem(item2);
project1.deleteItem(item1.id);


let projectHtml = renderProject(project1);
root.appendChild(projectHtml);