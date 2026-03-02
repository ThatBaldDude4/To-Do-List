export function saveItem(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
    return;
};

export function getProjects() {
    let data = localStorage.getItem("projects");
    data = JSON.parse(data);
    data.map((project) => {
        project.addItemToProject = function(item) {
            this.items.push(item);
        };
        project.deleteItem = function(itemId) {
            this.items = this.items.filter((item) => {
                return item.id !== itemId;
            })
        }
    })
    return data;
}

