"use strict";
class Singleton {
    set setName(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    constructor() {
        this.name = "";
    }
    static get getSingleton() {
        if (this.singleton) {
            return this.singleton;
        }
        else {
            this.singleton = new Singleton;
            return this.singleton;
        }
    }
}
const sing = Singleton.getSingleton;
sing.setName = "Mohammed";
const sing2 = Singleton.getSingleton;
console.log(sing);
console.log(sing2);
