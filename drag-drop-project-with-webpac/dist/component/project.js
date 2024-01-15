import State from '../util/state.js';
export var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["ACTIVE"] = 0] = "ACTIVE";
    ProjectStatus[ProjectStatus["FINISHED"] = 1] = "FINISHED";
})(ProjectStatus || (ProjectStatus = {}));
export class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
    get getPepoleAssigned() {
        return this.people === 1 ? '1 person' : this.people + ' persons';
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getProjectState() {
        return this.projectState;
    }
    addProject(title, description, people) {
        const newProject = new Project(Math.random() + '', title, description, people, ProjectStatus.ACTIVE);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const proj = this.projects.find(proj => {
            return proj.id === projectId;
        });
        if (proj && newStatus !== proj.status) {
            proj.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (let listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
ProjectState.projectState = new ProjectState;
export const projectState = ProjectState.getProjectState();
