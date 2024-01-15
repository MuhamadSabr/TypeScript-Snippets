import {DragTarget} from "../model/drag-drop-interfaces";
import { Component } from "../base-component/base-render-component";
import { Project } from "./project";
import {projectState, ProjectStatus} from "./project";
import { RenderSingleProject } from "./single-project";
import { Autobind } from "../decorator/decorators";


export class RenderProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget{

    assignedProjects: Project[] =[];

    constructor(private type: 'active' | 'finished'){

        super('project-list', 'app', "beforeend", `${type}-projects`);

    }

    
    private filterProjectType(){//U need to register this function, to the listener.
        
        projectState.addListener((projects:Project[])=>{

            const relevantProjects = projects.filter(proj=>{
                if(this.type==='active')
                    return proj.status===ProjectStatus.ACTIVE;
                else
                    return proj.status===ProjectStatus.FINISHED;
            });

            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }


    private renderProjects(){
        const listElement = document.getElementById(`${this.type}-projects-list`) as HTMLUListElement;

        while(listElement.firstChild){
            listElement.removeChild(listElement.firstChild);
        }

        for(let proj of this.assignedProjects){
            new RenderSingleProject(this.targetElement.querySelector('ul')!.id, proj).initialize();
        }

    }

    protected renderContent(){
        const listId = `${this.type}-projects-list`;
        this.targetElement.querySelector('ul')!.id = listId;
        this.targetElement.querySelector('h2')!.textContent = this.type.toUpperCase()+ ' PROJECTS';
    }


    initialize(){
        this.filterProjectType();
        this.renderContent();
        this.targetElement.addEventListener('dragover', this.dragOverHandler);
        this.targetElement.addEventListener('drop', this.dropHandler);
        this.targetElement.addEventListener('dragleave', this.dragLeaveHandler);
    }


    @Autobind
    dragOverHandler(event: DragEvent): void {

        if(event.dataTransfer && event.dataTransfer.types[0]==='text/plain'){

            event.preventDefault();  //Default, the drop is disabled. So prevent default.
            this.targetElement.classList.add('droppable');

        }
        
    }

    @Autobind
    dropHandler(event: DragEvent): void {
        const projectId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(projectId, this.type==='active' ? ProjectStatus.ACTIVE : ProjectStatus.FINISHED);
    }

    @Autobind
    dragLeaveHandler(event: DragEvent): void {
        this.targetElement.classList.remove('droppable');
    }

}