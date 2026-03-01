export function saveItem(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
    return;
};

export function getProjects() {
    let data = localStorage.getItem("projects");
    return JSON.parse(data);
}