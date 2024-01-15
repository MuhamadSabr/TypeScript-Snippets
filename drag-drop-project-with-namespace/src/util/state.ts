
/// <reference path="listener.ts" />


namespace App{

    export abstract class State<T>{
        protected listeners: Listener<T>[] = [];
    
        addListener(listenerFunction:Listener<T>){
            this.listeners.push(listenerFunction);
        }
    
    }
    
}