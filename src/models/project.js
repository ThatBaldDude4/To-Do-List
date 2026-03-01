export class Project {
    constructor({title}) {
        this.title = title;
        this.items = [];
        this.id = crypto.randomUUID();
    }
};

export function addItemToProject(state, item) {
    let project = state.projects.find(proj => proj.id === state.currentProjectId);
    project.items.push(item)
}

export function deleteItem(project, itemId) {
    project.items = project.items.filter((i) => {
        return i.id !== itemId;
    })
}

export function createProject(title) {
    const project = new Project({title});
    return project;
};