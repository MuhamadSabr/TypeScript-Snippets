function add(){
    console.log(5+5 +" Hi");
    // return 5;
}

function printl(input: string){
    console.log(input);
}

type CallBack = (number1: number) => void;
function addAndHandle(n1:number, n2:number, callBack:CallBack){
    const result = n1+n2;
    callBack(result);
}

addAndHandle(5, 3.43, (result) :number=>{
    console.log("Result", result);
    return 5;
});

