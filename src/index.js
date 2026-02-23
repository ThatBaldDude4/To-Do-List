import {Item} from "./models/item.js";
import {Project} from "./models/project.js";

const project1 = new Project({title: "first project"})

let firstItem = new Item({
    title: "Test",
    description: "new desc"
})
let secondItem = new Item({
    title: "Test",
    description: "new desc"
})
let thirdItem = new Item({
    title: "Test",
    description: "new desc"
})

project1.addItem(firstItem)
let updatedItem = firstItem.getNewUpdate({title: "newTitle"})
project1.addItem(updatedItem)
console.log(project1.items);

// this is where you'll add the modules together
// try to seperate as much code as possible following SOLID