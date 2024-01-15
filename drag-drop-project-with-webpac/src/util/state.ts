import Listener from "./listener.js";

export default abstract class State<T>{
    protected listeners: Listener<T>[] = [];

    addListener(listenerFunction:Listener<T>){
        this.listeners.push(listenerFunction);
    }

}