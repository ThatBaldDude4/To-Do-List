

export const storage = {
    saveProjects(projects) {
        localStorage.setItem("projects", JSON.stringify(projects));
        return;
    },

    getProjects() {
        return JSON.parse(localStorage.getItem("projects"));
    },

    hydrateProjects(projects) {
        if (!projects) {return []}
        const allowed = ["title", "description", "priority", "dueDate", "expanded"];
        projects.forEach((project) => {
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
            };

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
        return projects;
    },
}

