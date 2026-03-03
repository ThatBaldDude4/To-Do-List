export function saveItem(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
    return;
};

export function getProjects() {
    let data = localStorage.getItem("projects");
    if (!data) {return []};
    data = JSON.parse(data);
    data.forEach((project) => {
        project.addItemToProject = function(item) {
            this.items.push(item);
        };
        project.deleteItem = function(itemId) {
            this.items = this.items.filter((item) => {
                return item.id !== itemId;
            })
        };

        project.updateProject = function(fields) {
            const allowed = ["title", "expanded"];
            for (const key of Object.keys(fields)) {
            if (!allowed.includes(key)) {
                throw new Error("New keys not allowed for Items");
            };
            this[key] = fields[key];
            }
        }  

        const allowed = ["title", "description", "priority", "dueDate", "expanded"];
        project.items.forEach((item) => {
            item.updateItem = function(fields) {
                for (const key of Object.keys(fields)) {
                    if (!allowed.includes(key)) {
                        throw new Error("New keys not allowed for Items");
                    };
                    this[key] = fields[key];
                }
            }
        })
    })
    return data;
};

