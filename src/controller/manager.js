import {Item, createItem} from "../models/item.js";
import {Project, createProject} from "../models/project.js";
import renderProject from "../ui/renderProjects.js";
import storageArr from "./storage.js";

const root = document.getElementById("app-container");



const project1 = createProject("Project 1");
const project2 = createProject("Project 2");
const project3 = createProject("Project 3");

storageArr.push(project1);
storageArr.push(project2);
storageArr.push(project3);

const item1 = createItem("First Title", "Testing out my functions");
const item2 = createItem("Second Item", "More testsss yay");

project1.addItem(item1);
project1.addItem(item2);
project1.deleteItem(item1.id);

storageArr.forEach((project) => {
    root.appendChild(renderProject(project));
})
