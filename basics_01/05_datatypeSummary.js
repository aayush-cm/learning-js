//primitive types
//7types: string,bool,null,undefined,symbol,bigint,Number


let Score = 100
let ScoreValue = 33.33

let IsLoggedIn = true
let OutsideTemp = null
let State;

console.log(typeof Score);
console.log(typeof ScoreValue);
console.log(typeof OutsideTemp);
console.log(typeof State);
console.log(typeof IsLoggedIn);

const Id = Symbol('123') //typeof symbol
const NewId = Symbol('123')
console.log(Id === NewId);

//const bigNumber = 950953996496963n

//Refrence (Non Primitive)
//Array, Object, Functions

const MyArray = ["aayush","piyush","anyyush"];
let MyObj = {
    name: "aayush",
    age: 18,
}

const MyFunction = function(){
    console.log("hello world");
}
MyFunction()
console.log(typeof MyArray); //object type
console.log(typeof MyObj);  //object type
console.log(typeof MyFunction);// function (object fuction type)
