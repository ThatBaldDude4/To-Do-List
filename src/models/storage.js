import { createItem } from "./item.js";
import { createProject } from "./project.js";

export const storage = {
    saveProjects(projects) {
        localStorage.setItem("projects", JSON.stringify(projects));
        return;
    },

    getProjects() {
        return JSON.parse(localStorage.getItem("projects"));
    },

    hydrateProjects(projects) {
        if (!projects) return [];

        return projects.map((p) => {
            const project = createProject(p.title, p.items, p.id);

            project.items = (p.items ?? []).map((i) =>
            createItem(i.title, i.description, i.priority, i.dueDate, i.id, i.complete)
            );

            return project;
        });
    }
};
