export class Project {
    constructor({title}) {
        this.title = title;
        this.items = [];
        this.id = crypto.randomUUID();
    }
};

export function createProject(title) {
    const project = new Project({title});
    return project;
};