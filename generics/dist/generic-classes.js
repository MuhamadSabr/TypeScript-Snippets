"use strict";
class DataStorage {
    constructor() {
        this.items = [];
    }
    addItem(...item) {
        this.items.push(...item);
    }
    removeItem(item) {
        if (this.items.indexOf(item) == -1)
            return -1;
        this.items.splice(this.items.indexOf(item), 1);
    }
    getItems() {
        return [...this.items];
    }
}
const strDataStorage = new DataStorage;
strDataStorage.addItem("Karim");
strDataStorage.addItem("Jawhar");
strDataStorage.addItem("Mustafa", "Shafiq", "Rafiq");
strDataStorage.removeItem("Jawhar");
strDataStorage.removeItem("Mmd");
console.log(strDataStorage);
const numDataStorage = new DataStorage;
numDataStorage.addItem(3, 5, 1, 9);
numDataStorage.addItem(5, 3);
numDataStorage.removeItem(5);
numDataStorage.removeItem(3);
console.log(numDataStorage);
