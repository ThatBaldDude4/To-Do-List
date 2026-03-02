export class Item {
    constructor({title, description, priority, dueDate}) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.id = crypto.randomUUID();
        this.dueDate = dueDate;
        this.expanded = false;
    }
}

export function createItem(title, description, priority, dueDate) {
    const item = new Item({title, description, priority, dueDate });
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