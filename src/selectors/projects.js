export default (projects, filters) => {
    return projects.filter((project) => {
        return filters[project.type]
    });
}