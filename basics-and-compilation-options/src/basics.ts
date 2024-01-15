function add1(number1:number, number2:number, result= false, phrase= "Result is: "){
    if(result){
        return phrase + (number1+number2);
    } 
}

let number1 = 15;
const number2 = 1.3;

const result = add1(number1, number2);

console.log("result", result);