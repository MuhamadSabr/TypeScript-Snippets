var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "../base-component/base-render-component.js";
import { projectState, ProjectStatus } from "./project.js";
import { RenderSingleProject } from "./single-project.js";
import { Autobind } from "../decorator/decorators.js";
export class RenderProjectList extends Component {
    constructor(type) {
        super('project-list', 'app', "beforeend", `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
    }
    filterProjectType() {
        projectState.addListener((projects) => {
            const relevantProjects = projects.filter(proj => {
                if (this.type === 'active')
                    return proj.status === ProjectStatus.ACTIVE;
                else
                    return proj.status === ProjectStatus.FINISHED;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderProjects() {
        const listElement = document.getElementById(`${this.type}-projects-list`);
        while (listElement.firstChild) {
            listElement.removeChild(listElement.firstChild);
        }
        for (let proj of this.assignedProjects) {
            new RenderSingleProject(this.targetElement.querySelector('ul').id, proj).initialize();
        }
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.targetElement.querySelector('ul').id = listId;
        this.targetElement.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS';
    }
    initialize() {
        this.filterProjectType();
        this.renderContent();
        this.targetElement.addEventListener('dragover', this.dragOverHandler);
        this.targetElement.addEventListener('drop', this.dropHandler);
        this.targetElement.addEventListener('dragleave', this.dragLeaveHandler);
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            this.targetElement.classList.add('droppable');
        }
    }
    dropHandler(event) {
        const projectId = event.dataTransfer.getData('text/plain');
        projectState.moveProject(projectId, this.type === 'active' ? ProjectStatus.ACTIVE : ProjectStatus.FINISHED);
    }
    dragLeaveHandler(event) {
        this.targetElement.classList.remove('droppable');
    }
}
__decorate([
    Autobind
], RenderProjectList.prototype, "dragOverHandler", null);
__decorate([
    Autobind
], RenderProjectList.prototype, "dropHandler", null);
__decorate([
    Autobind
], RenderProjectList.prototype, "dragLeaveHandler", null);
