"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var App;
(function (App) {
    class Component {
        constructor(templateElementId, hostingElementId, insertPosition, targetElementId) {
            this.templateElement = document.getElementById(templateElementId);
            this.hostingElement = document.getElementById(hostingElementId);
            let clone = document.importNode(this.templateElement.content, true);
            this.targetElement = clone.firstElementChild;
            if (targetElementId)
                this.targetElement.id = targetElementId;
            this.hostingElement.insertAdjacentElement(insertPosition, this.targetElement);
        }
    }
    App.Component = Component;
})(App || (App = {}));
var App;
(function (App) {
    class State {
        constructor() {
            this.listeners = [];
        }
        addListener(listenerFunction) {
            this.listeners.push(listenerFunction);
        }
    }
    App.State = State;
})(App || (App = {}));
var App;
(function (App) {
    let ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["ACTIVE"] = 0] = "ACTIVE";
        ProjectStatus[ProjectStatus["FINISHED"] = 1] = "FINISHED";
    })(ProjectStatus = App.ProjectStatus || (App.ProjectStatus = {}));
    class Project {
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
    App.Project = Project;
    class ProjectState extends App.State {
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
    App.projectState = ProjectState.getProjectState();
})(App || (App = {}));
var App;
(function (App) {
    function validate(validatibleInput) {
        let isValid = true;
        if (!validatibleInput.required)
            return true;
        if (validatibleInput.minLength && typeof validatibleInput.value == 'string') {
            isValid = isValid && validatibleInput.value.length >= validatibleInput.minLength;
        }
        if (validatibleInput.maxLength && typeof validatibleInput.value == 'string') {
            isValid = isValid && validatibleInput.value.length <= validatibleInput.maxLength;
        }
        if (validatibleInput.min && typeof validatibleInput.value == 'number') {
            isValid = isValid && validatibleInput.value >= validatibleInput.min;
        }
        if (validatibleInput.max && typeof validatibleInput.value == 'number') {
            isValid = isValid && validatibleInput.value <= validatibleInput.max;
        }
        return isValid;
    }
    App.validate = validate;
})(App || (App = {}));
var App;
(function (App) {
    function Autobind(target, methodName, descriptor) {
        const originalMethod = descriptor.value;
        const adjustedDescriptor = {
            configurable: true,
            enumerable: false,
            get() {
                return originalMethod.bind(this);
            }
        };
        return adjustedDescriptor;
    }
    App.Autobind = Autobind;
})(App || (App = {}));
var App;
(function (App) {
    class RenderInputForm extends App.Component {
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
            if (!App.validate(validitableTitle) || !App.validate(validitableDesc) || !App.validate(validitablePeople)) {
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
                App.projectState.addProject(title, desc, people);
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
        App.Autobind
    ], RenderInputForm.prototype, "submitHandler", null);
    App.RenderInputForm = RenderInputForm;
})(App || (App = {}));
var App;
(function (App) {
    class RenderSingleProject extends App.Component {
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
        App.Autobind
    ], RenderSingleProject.prototype, "dragEndHandler", null);
    __decorate([
        App.Autobind
    ], RenderSingleProject.prototype, "dragStartHandler", null);
    App.RenderSingleProject = RenderSingleProject;
})(App || (App = {}));
var App;
(function (App) {
    class RenderProjectList extends App.Component {
        constructor(type) {
            super('project-list', 'app', "beforeend", `${type}-projects`);
            this.type = type;
            this.assignedProjects = [];
        }
        filterProjectType() {
            App.projectState.addListener((projects) => {
                const relevantProjects = projects.filter(proj => {
                    if (this.type === 'active')
                        return proj.status === App.ProjectStatus.ACTIVE;
                    else
                        return proj.status === App.ProjectStatus.FINISHED;
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
                new App.RenderSingleProject(this.targetElement.querySelector('ul').id, proj).initialize();
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
            App.projectState.moveProject(projectId, this.type === 'active' ? App.ProjectStatus.ACTIVE : App.ProjectStatus.FINISHED);
        }
        dragLeaveHandler(event) {
            this.targetElement.classList.remove('droppable');
        }
    }
    __decorate([
        App.Autobind
    ], RenderProjectList.prototype, "dragOverHandler", null);
    __decorate([
        App.Autobind
    ], RenderProjectList.prototype, "dropHandler", null);
    __decorate([
        App.Autobind
    ], RenderProjectList.prototype, "dragLeaveHandler", null);
    App.RenderProjectList = RenderProjectList;
})(App || (App = {}));
var App;
(function (App) {
    const renderForm = new App.RenderInputForm;
    renderForm.initialize();
    const renderActiveProjectlist = new App.RenderProjectList("active");
    renderActiveProjectlist.initialize();
    const renderFinishedProjectlist = new App.RenderProjectList("finished");
    renderFinishedProjectlist.initialize();
})(App || (App = {}));
