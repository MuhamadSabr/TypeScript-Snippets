class Singleton{
    private static singleton:Singleton;
    private name:string;

    set setName(name:string){
        this.name = name;
    }
    get getName(){
        return this.name;
    }

    private constructor(){
        this.name="";
    }

    public static get getSingleton(): Singleton{
        if(this.singleton){
            return this.singleton;
        }else{
             this.singleton= new Singleton;
             return this.singleton;
        }
    }
    
}


const sing = Singleton.getSingleton;
sing.setName="Mohammed";
const sing2 = Singleton.getSingleton;
console.log(sing);
console.log(sing2);