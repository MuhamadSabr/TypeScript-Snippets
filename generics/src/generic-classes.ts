class DataStorage<T extends number | string>{
    private items:Array<T> = [];

    // constructor(){} This is the default, if u have this u must not include () when u instantiate the class and
                                                            // specify the generic type
    addItem(...item:T[]){
        this.items.push(...item);
    }

    removeItem(item:T){
        if(this.items.indexOf(item)==-1)
            return -1;

        this.items.splice(this.items.indexOf(item),1);
    }

    getItems(){
        return [...this.items];
    }
}

const strDataStorage = new DataStorage<string>; //If u dont' specify the name, then implict any will be the case.
strDataStorage.addItem("Karim");
strDataStorage.addItem("Jawhar");
strDataStorage.addItem("Mustafa", "Shafiq", "Rafiq");
strDataStorage.removeItem("Jawhar");
strDataStorage.removeItem("Mmd");
console.log(strDataStorage);

const numDataStorage = new DataStorage<number>;
numDataStorage.addItem(3,5,1,9);
numDataStorage.addItem(5,3);
numDataStorage.removeItem(5);
numDataStorage.removeItem(3);
console.log(numDataStorage);




