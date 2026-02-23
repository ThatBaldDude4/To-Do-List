export class Item {
    constructor(title, description) {
        this.title = title;
        this.description = description
    }

    updateInfo(type, info) {
        const allowed = ["title", "description"];
        if (!allowed.includes(type)) {
            throw Error("Type doesn't exist");
        };
        this[type] = info;
    }
}