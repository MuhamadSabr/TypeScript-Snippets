
namespace App{

     export abstract class Component<T extends HTMLElement, U extends HTMLElement> {

            templateElement: HTMLTemplateElement;
            hostingElement : T;
            targetElement : U;
        
        
            constructor(templateElementId:string, hostingElementId:string, insertPosition:InsertPosition,
                                                                            targetElementId?:string){//private type: 'active' | 'finished'
        
                this.templateElement = document.getElementById(templateElementId) as HTMLTemplateElement;
                this.hostingElement  = document.getElementById(hostingElementId) as T;
        
                
                let clone = document.importNode(this.templateElement.content, true);
        
                this.targetElement = clone.firstElementChild as U;
        
                if(targetElementId)
                    this.targetElement.id= targetElementId; //`${this.type}-projects`;
        
                
                this.hostingElement.insertAdjacentElement(insertPosition, this.targetElement);
        
            }
        
            protected abstract renderContent():void;
        
            protected abstract initialize():void;
    }

}