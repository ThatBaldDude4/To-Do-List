import { state } from "./index.js";
import { render } from "./models/render.js";
import { createItem } from "./models/item.js";
import {createProject} from "./models/project.js";
import { storage } from "./models/storage.js";

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
        project.addItemToProject(item)
        storage.saveProjects(state.projects);
        state.view = "home";
    };

    if (actionType === "submit-project-form") {
        let {title} = action.payload;
        let project = createProject(title);
        state.projects.push(project);
        storage.saveProjects(state.projects);
        state.view = "home";
    };

    if (actionType === "delete-item") {
        let {projectId, itemId} = action.payload;
        if (!projectId || !itemId) {return};
        let project = state.projects.find((proj) => proj.id === projectId);
        project.deleteItem(itemId);
        storage.saveProjects(state.projects);
        state.view = "home";
    };

    if (actionType === "delete-project") {
        state.projects = state.projects.filter((project) => {
            return project.id !== state.currentProjectId;
        });
        storage.saveProjects(state.projects);
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
        item.updateItem({title, description, priority, dueDate});
        storage.saveProjects(state.projects);
        state.view = "home";
    };

    if (actionType === "toggle-item-info") {
        let project = state.projects.find(project => project.id === action.payload.projectId);
        let item = project.items.find(item => item.id === action.payload.itemId);
        item.updateItem({expanded: !item.expanded});
        storage.saveProjects(state.projects);
        state.view = "home";
    };

    if (actionType === "toggle-project-items") {
        let project = state.projects.find(project => project.id === state.currentProjectId);
        project.updateProject({expanded: !project.expanded});
        storage.saveProjects(state.projects);
        state.view = "home";
    }

    render(state);
}