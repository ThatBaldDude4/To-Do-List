import { state } from "./index.js";
import { render } from "./models/render.js";
import { createItem } from "./models/item.js";
import {createProject} from "./models/project.js";

export function dispatch(action) {
    let actionType = action.type;

    if (actionType === "home" || "cancel-form") {
        state.view = "home";
    };

    if (actionType === "open-item-form") {
        state.view = "open-item-form";
    };

    if (actionType === "open-project-form") {
        state.view = "open-project-form";
    };

    if (actionType === "submit-item-form") {
        let {title, description, priority} = action.payload;
        let item = createItem(title, description, priority);
        const project = state.projects.find(
            p => p.id === state.currentProjectId
        );
        project.addItem(item);
        state.view = "home";
    };

    if (actionType === "submit-project-form") {
        let {title} = action.payload;
        let project = createProject(title);
        state.projects.push(project);
        state.view = "home";
    };

    if (actionType === "delete-item") {
        let {projectId, itemId} = action.payload;
        if (!projectId || !itemId) {return};
        let project = state.projects.find((proj) => proj.id === projectId);
        project.deleteItem(itemId);
        state.view = "home";
    }

    if (actionType === "edit-item") {
        state.currentItemId = action.payload.itemId;
        state.view = "edit-item";
    };

    if (actionType === "submit-item-edit-form") {
        let project = state.projects.find(project => project.id === state.currentProjectId);
        let item = project.items.find(item => item.id === state.currentItemId);
        let {title, description} = action.payload;
        item.updateItem({title, description});
        state.view = "home";
    }

    render(state);
}