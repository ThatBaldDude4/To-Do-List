export class Project {
    constructor({title}) {
        this.title = title;
        this.items = [];
        this.id = crypto.randomUUID();
        this.expanded = false;
    }

    updateProject(fields) {
        const allowed = ["title", "expanded"];
        for (const key of Object.keys(fields)) {
        if (!allowed.includes(key)) {
            throw new Error("New keys not allowed for Items");
        };
        this[key] = fields[key];
        }
    }

    addItemToProject(item) {
        this.items.push(item);
    };

    deleteItem(itemId) {
        this.items = this.items.filter((item) => {
            return item.id !== itemId;
        })
    };
};

export function createProject(title) {
    const project = new Project({title});
    return project;
};
