import {Item} from "../models/item.js";
import {Project} from "../models/project.js";

export function createProject(title) {
    const project = new Project({title});
    return project;
};

export function createItem(title, description) {
    const item = new Item({title, description});
    return item;
};