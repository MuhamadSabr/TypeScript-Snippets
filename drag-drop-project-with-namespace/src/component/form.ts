/// <reference path="../base-component/base-render-component.ts" />
/// <reference path="project.ts" />
/// <reference path="../util/validation.ts" />
/// <reference path="../decorator/decorators.ts" />


namespace App{

    export class RenderInputForm extends Component<HTMLDivElement, HTMLFormElement> {

        titleInputElement : HTMLInputElement;
        descriptionInputElement : HTMLInputElement;
        peopleInputElement: HTMLInputElement;
    
    
        constructor(){
    
            super('project-input', 'app', 'afterbegin', 'user-input');
    
    
            //Access the form input elements
            this.titleInputElement = this.targetElement.querySelector('#title') as HTMLInputElement;
            this.descriptionInputElement = this.targetElement.querySelector('#description') as HTMLInputElement;
            this.peopleInputElement= this.targetElement.querySelector('#people') as HTMLInputElement;
    
        }
    
    
        private gatherUserInput() : [string, string, number] | void{
    
            const title = this.titleInputElement.value;
            const desc  = this.descriptionInputElement.value;
            const people= this.peopleInputElement.value;
    
            const validitableTitle:Validitable = {
                value: title,
                required: true,
                minLength: 5,
                maxLength: 25
            }
    
            const validitableDesc:Validitable = {
                value: desc,
                required: true,
                minLength: 20,
                maxLength: 500
            }
    
            const validitablePeople:Validitable = {
                value: +people,
                required: true,
                min: 1,
                max: 5
            }
    
            if(!validate(validitableTitle) || !validate(validitableDesc) || !validate(validitablePeople)){
                alert("Invalid input, please try again");
            }else{
                return [title, desc, +people];
            }
    
        }
    
    
        @Autobind
        private submitHandler(event:Event){
    
            event.preventDefault();
            
            const userInput = this.gatherUserInput();
    
            if(Array.isArray(userInput)){
                const [title, desc, people] = userInput;
    
                projectState.addProject(title, desc, people);
    
                this.clearInputs();
            }
    
        }
    
    
        private clearInputs(){
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }
        
    
        private configure(){
            this.targetElement.addEventListener('submit', this.submitHandler);
        }
    
    
        initialize(){
            this.configure();
        }
    
        protected renderContent(): void {
            
        }
    
    }
}