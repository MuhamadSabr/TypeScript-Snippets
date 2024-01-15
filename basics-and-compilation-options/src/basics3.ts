type Combinable = number|string;

function combine(input1: Combinable, input2: Combinable){
    if(typeof input1 =='number' && typeof input2=='number')
        return input1 + input2;
    else
        return input1.toString() + input2;
}

console.log(combine(25.9, 30));
console.log(combine("Max", "Anna"));