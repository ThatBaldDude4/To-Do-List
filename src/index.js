import {Item} from "./models/item.js";
import {Project} from "./models/project.js";

function createProject(title) {
    const project = new Project({title});
    return project;
};

function createItem(title, description) {
    const item = new Item({title, description});
    return item;
};

function cleanUpItems(project, id) {
    project.cleanItem(id);
    return;
}

const project1 = new Project({title: "first project"})

project1.addItem(firstItem)
console.log(firstItem);
firstItem.updateItem({title: "newTitle", description: "new desc"})
console.log(firstItem);
let updatedItem = firstItem.getNewUpdate({title: "newTitle"})
console.log();
// this is where you'll add the modules together
// try to seperate as much code as possible following SOLID