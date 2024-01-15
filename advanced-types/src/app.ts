const usernameInput = <HTMLInputElement>document.getElementById("user-name")!;//The general type is HTMLElement, u cast it here to HTMLInputElement
// const usernameInput = document.getElementById("user-name") as HTMLInputElement;  //This is an alternative to the above casting, especially used with React.
if(!usernameInput){
    console.log("Null was returned");
}
else{
    usernameInput.value = "Hi there";
}


// document.addEventListener("DOMContentLoaded", function() { We can use defer attrbute in the <script tag> in our index.html, to make sure the DOM is fully loaded.
//     const usernameInput = document.getElementById("user-name") as HTMLInputElement | null;
  
//     if (usernameInput) {
//       usernameInput.value = "hi there";
//     } else {
//       console.error("Element with ID 'user-name' not found.");
//     }
//   });


interface ErrorContainer {
    [prop:string]: string
}

const errorStack: ErrorContainer ={
    "email": "Invalid email",
    "password": "Password must contain capital letter"
}


function add(a:string, b:string): string;
function add(a:number, b:number): number;
function add(a:string|number, b:string|number): string|number{
    if(typeof a==='string' || typeof b==='string'){
        return a+b.toString();
    }
    return +a+ +b;
}
const str = add("M", "O");
const num = add(5, 3);
