export class Item {
    constructor({title, description, priority, dueDate, id}) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.id = id ?? crypto.randomUUID();
        this.dueDate = dueDate;
        this.expanded = false;
    }

    updateItem(fields) {
        const allowed = ["title", "description", "priority", "dueDate", "expanded"];
        for (const key of Object.keys(fields)) {
            if (!allowed.includes(key)) {
                throw new Error("New keys not allowed for Items");
            };
            this[key] = fields[key];
        }
    }
}

export function createItem(title, description, priority, dueDate, id) {
    const item = new Item({title, description, priority, dueDate, id });
    return item;
};

export function updateItem(item, fields) {
    const allowed = ["title", "description", "priority", "dueDate", "expanded"];
    for (const key of Object.keys(fields)) {
        if (!allowed.includes(key)) {
            throw new Error("New keys not allowed for Items");
        };
        item[key] = fields[key];
    }
}