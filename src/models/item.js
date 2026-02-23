export class Item {
    constructor({title, description}) {
        this.title = title;
        this.description = description
        this.id = crypto.randomUUID()
    }

    getNewUpdate(fields) {
        const allowed = ["title", "description"];
        for (const key of Object.keys(fields)) {
            if (!allowed.includes(key)) {
                throw new Error("New fields not allowed for Item(s)")
            }
        }

        const updatedItem = new Item({...this, ...fields})
        return updatedItem
    }
}