import { state } from "./index.js";
import { render } from "./models/render.js";
import { createItem, updateItem } from "./models/item.js";
import {createProject} from "./models/project.js";
import { saveItem } from "./models/storage.js";
import { addItemToProject, deleteItem } from "./models/project.js"

export function dispatch(action) {
    let actionType = action.type;

    if (actionType === "home" || actionType === "cancel-form") {
        state.view = "home";
    };

    if (actionType === "open-item-form") {
        state.view = "open-item-form";
    };

    if (actionType === "open-project-form") {
        state.view = "open-project-form";
    };

    if (actionType === "submit-item-form") {
        let {title, description, priority, dueDate} = action.payload;
        let item = createItem(title, description, priority, dueDate);
        const project = state.projects.find(
            p => p.id === state.currentProjectId
        );
        console.log(project);
        addItemToProject(state, item)
        saveItem(state.projects);
        state.view = "home";
    };

    if (actionType === "submit-project-form") {
        let {title} = action.payload;
        let project = createProject(title);
        state.projects.push(project);
        saveItem(state.projects);
        state.view = "home";
    };

    if (actionType === "delete-item") {
        let {projectId, itemId} = action.payload;
        if (!projectId || !itemId) {return};
        let project = state.projects.find((proj) => proj.id === projectId);
        deleteItem(project, itemId);
        saveItem(state.projects);
        state.view = "home";
    }

    if (actionType === "edit-item") {
        state.currentItemId = action.payload.itemId;
        state.currentProjectId = action.payload.projectId;
        state.view = "edit-item";
    };

    if (actionType === "submit-item-edit-form") {
        let project = state.projects.find(project => project.id === state.currentProjectId);
        let item = project.items.find(item => item.id === state.currentItemId);
        let {title, description, priority, dueDate} = action.payload;
        updateItem(item, {title, description, priority, dueDate});
        saveItem(state.projects);
        state.view = "home";
    }

    render(state);
}