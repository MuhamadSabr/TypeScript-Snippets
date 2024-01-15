var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "../base-component/base-render-component.js";
import { Autobind } from "../decorator/decorators.js";
import { validate } from "../util/validation.js";
import { projectState } from "./project.js";
export class RenderInputForm extends Component {
    constructor() {
        super('project-input', 'app', 'afterbegin', 'user-input');
        this.titleInputElement = this.targetElement.querySelector('#title');
        this.descriptionInputElement = this.targetElement.querySelector('#description');
        this.peopleInputElement = this.targetElement.querySelector('#people');
    }
    gatherUserInput() {
        const title = this.titleInputElement.value;
        const desc = this.descriptionInputElement.value;
        const people = this.peopleInputElement.value;
        const validitableTitle = {
            value: title,
            required: true,
            minLength: 5,
            maxLength: 25
        };
        const validitableDesc = {
            value: desc,
            required: true,
            minLength: 20,
            maxLength: 500
        };
        const validitablePeople = {
            value: +people,
            required: true,
            min: 1,
            max: 5
        };
        if (!validate(validitableTitle) || !validate(validitableDesc) || !validate(validitablePeople)) {
            alert("Invalid input, please try again");
        }
        else {
            return [title, desc, +people];
        }
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
    clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    configure() {
        this.targetElement.addEventListener('submit', this.submitHandler);
    }
    initialize() {
        this.configure();
    }
    renderContent() {
    }
}
__decorate([
    Autobind
], RenderInputForm.prototype, "submitHandler", null);
