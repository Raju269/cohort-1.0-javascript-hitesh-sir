// Primtive dataype 
//  There are 7 primitive datatype 
// String , number, boolean, null , undefined, bigINt , symbols 
let myName = "Rajukumar";
let numberValue = 45234;
let giveSuggestion = true;
let accountNumber = null;
let emailID ;
let symbolsReprestend = Symbol("123");
let bigNumber = 23434234324n;
console.table(typeof[myName,numberValue,giveSuggestion,accountNumber,emailID,symbolsReprestend]);
console.table([myName,numberValue,giveSuggestion,accountNumber,emailID,symbolsReprestend]);

// References datatypes in javascript
// objects 
// Arrays 
// Functions
let a = {
    name : "Raju kumar",
    course : "btech cse ai and ml ", 
    address :{
        street:"b-234 Saket",
        city:"Delhi",
        pincode:110005
    }
}
console.log(a);
console.log(a.name);
console.log(a.address);
console.log(a.address.street);

// // Arrays
let arr = [1,2,3,4,5,6,7,8,9,10,11];
console.log(arr);
let arr1 = [1,3,'Rajukumumar',false,true,34.343,"vikas"];
console.log(arr1);

// Functions
function addition(){
    return console.log("function is done ")
    
}
addition();
console.log(addition());

// ++++++++++++++++++++++++++++
// stack (primitive) and heap (non-primitive)

let myProjectName = "Ravane";
let anotherProjectName = myProjectName;
anotherProjectName = "eventspages";
console.log(myProjectName);
console.log(anotherProjectName);