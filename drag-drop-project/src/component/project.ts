import State from '../util/state';


export enum ProjectStatus{
    ACTIVE, FINISHED
}


export class Project{
    constructor(public id:string, public title:string, public description:string, public people:number, public status:ProjectStatus){}

    get getPepoleAssigned():string{
        return this.people===1 ? '1 person' : this.people + ' persons';
    }
}


class ProjectState extends State<Project>{
    
    private projects:Project[] = [];
    private static projectState = new ProjectState;


    private constructor(){super();}


    static getProjectState(){
        return this.projectState;
    }

    addProject(title:string, description:string, people:number){
        const newProject = new Project(Math.random()+'', title, description, people, ProjectStatus.ACTIVE);

        this.projects.push(newProject);
        
        this.updateListeners();

    }

    moveProject(projectId:string, newStatus:ProjectStatus){


        const proj = this.projects.find(proj=>{
            return proj.id===projectId;
        });

        if(proj && newStatus!==proj.status){
            proj.status = newStatus;
            this.updateListeners();
        }

    }

    updateListeners(){
        for(let listenerFn of this.listeners){
            listenerFn(this.projects.slice());//Return a copy to avoid mutation.
        }
    }

}

export const projectState = ProjectState.getProjectState();