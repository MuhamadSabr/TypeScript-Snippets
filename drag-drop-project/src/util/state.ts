import Listener from "./listener";

export default abstract class State<T>{
    protected listeners: Listener<T>[] = [];

    addListener(listenerFunction:Listener<T>){
        this.listeners.push(listenerFunction);
    }

}