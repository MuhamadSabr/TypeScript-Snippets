var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "../base-component/base-render-component.js";
import { Autobind } from "../decorator/decorators.js";
export class RenderSingleProject extends Component {
    constructor(hostingElementId, project) {
        super('single-project', hostingElementId, 'beforeend');
        this.project = project;
        this.dataFomrat = 'text/plain';
    }
    renderContent() {
        this.targetElement.querySelector('h3').textContent = this.project.title;
        this.targetElement.querySelector('h4').textContent = this.project.getPepoleAssigned + ' assigned';
        this.targetElement.querySelector('p').textContent = this.project.description;
    }
    initialize() {
        this.renderContent();
        this.targetElement.addEventListener('dragstart', this.dragStartHandler);
        this.targetElement.addEventListener('dragend', this.dragEndHandler);
    }
    dragEndHandler(event) {
    }
    dragStartHandler(event) {
        event.dataTransfer.setData(this.dataFomrat, this.project.id);
        event.dataTransfer.effectAllowed = 'move';
    }
}
__decorate([
    Autobind
], RenderSingleProject.prototype, "dragEndHandler", null);
__decorate([
    Autobind
], RenderSingleProject.prototype, "dragStartHandler", null);
