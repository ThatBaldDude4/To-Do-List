export class Item {
    constructor({title, description, priority}) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.id = crypto.randomUUID()
    }

    updateItem(fields) {
        const allowed = ["title", "description"];
        for (const key of Object.keys(fields)) {
            if (!allowed.includes(key)) {
                throw new Error("New keys not allowed for Items");
            };
            this[key] = fields[key];
        }
    }
}

export function createItem(title, description, priority) {
    const item = new Item({title, description, priority });
    return item;
};