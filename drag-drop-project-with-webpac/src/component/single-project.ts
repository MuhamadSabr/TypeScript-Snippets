import {Component} from "../base-component/base-render-component.js";
import {Project} from "./project.js";
import {Draggable} from "../model/drag-drop-interfaces.js";
import { Autobind } from "../decorator/decorators.js";


export class RenderSingleProject extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{
    
    private project:Project;
    private dataFomrat:string;

    constructor(hostingElementId:string, project:Project){

        super('single-project', hostingElementId, 'beforeend');

        this.project = project;

        this.dataFomrat='text/plain';

    }

    protected renderContent(): void {

        this.targetElement.querySelector('h3')!.textContent = this.project.title;
        this.targetElement.querySelector('h4')!.textContent = this.project.getPepoleAssigned + ' assigned';
        this.targetElement.querySelector('p')!.textContent  = this.project.description;
    
    }

    initialize(): void {
        this.renderContent();
        this.targetElement.addEventListener('dragstart', this.dragStartHandler); //Start listening for drag start
        this.targetElement.addEventListener('dragend', this.dragEndHandler)     //Start listening for  drag end
    }


    @Autobind
    dragEndHandler(event: DragEvent): void {
        
    }

    @Autobind
    dragStartHandler(event: DragEvent): void {
        event.dataTransfer!.setData(this.dataFomrat, this.project.id);
        event.dataTransfer!.effectAllowed = 'move';
    }

}