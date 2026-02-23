export class Project {
    constructor({title}) {
        this.title = title;
        this.items = [];
        this.id = crypto.randomUUID();
    }

    addItem(item) {
        this.items.push(item);
    }

    deleteItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

    getItem(id) {
        let item = this.items.filter((item) => {
            return item.id = id
        });
        return item
    }
}