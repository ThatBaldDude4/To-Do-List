export class Project {
    constructor({title}) {
        this.title = title;
        this.items = [];
        this.id = crypto.randomUUID();
    }

    addItem(item) {
        this.items.push(item);
    }

    deleteItem(id) {
        this.items = this.items.filter((item) => {
            return item.id !== id;
        });
        console.log(this.items)
    }

    getItemFromId(id) {
        let item = this.items.filter((item) => {
            return item.id === id
        });
        return item
    }
}